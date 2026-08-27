import { hashPassword, comparePassword } from '@realmforge/server/auth/password';
import { signAccessToken, verifyToken } from '@realmforge/server/auth/jwt';
import { AuthService } from '@realmforge/server/auth/auth.service';
import { InMemoryUserRepository } from '@realmforge/server/auth/user.repository';
import { UserRole } from '@realmforge/shared';

describe('Auth System Unit Tests', () => {
  describe('Password Hashing', () => {
    it('should hash and correctly verify passwords', async () => {
      const password = 'StrongPassword123!';
      const hash = await hashPassword(password);

      expect(hash).not.toBe(password);
      expect(hash.length).toBeGreaterThan(20);

      const isMatch = await comparePassword(password, hash);
      expect(isMatch).toBe(true);

      const isWrongMatch = await comparePassword('WrongPassword', hash);
      expect(isWrongMatch).toBe(false);
    });
  });

  describe('JWT Tokens', () => {
    it('should sign and verify valid JWT tokens', () => {
      const payload = {
        userId: 'user-uuid-1234',
        username: 'ShadowKnight',
        role: UserRole.PLAYER,
      };

      const token = signAccessToken(payload);
      expect(typeof token).toBe('string');

      const verified = verifyToken(token);
      expect(verified.userId).toBe(payload.userId);
      expect(verified.username).toBe(payload.username);
      expect(verified.role).toBe(payload.role);
    });

    it('should throw on invalid/tampered tokens', () => {
      expect(() => verifyToken('tampered.invalid.token')).toThrow();
    });
  });

  describe('AuthService', () => {
    let repo: InMemoryUserRepository;
    let authService: AuthService;

    beforeEach(() => {
      repo = new InMemoryUserRepository();
      authService = new AuthService(repo);
    });

    it('should allow a new user to sign up and return user with initial profile and tokens', async () => {
      const result = await authService.signup({
        username: 'TowerMaster',
        email: 'towermaster@example.com',
        password: 'secure_password_99',
      });

      expect(result.user.username).toBe('TowerMaster');
      expect(result.user.email).toBe('towermaster@example.com');
      expect(result.user.role).toBe(UserRole.PLAYER);
      expect(result.user.eloRating).toBe(1000);
      expect(result.user.profile.gold).toBe(500);
      expect(result.tokens.accessToken).toBeDefined();
    });

    it('should reject duplicate username', async () => {
      await authService.signup({
        username: 'DuplicateUser',
        email: 'user1@example.com',
        password: 'password123',
      });

      await expect(
        authService.signup({
          username: 'DuplicateUser',
          email: 'user2@example.com',
          password: 'password123',
        }),
      ).rejects.toThrow('Username is already taken');
    });

    it('should reject duplicate email', async () => {
      await authService.signup({
        username: 'UniqueUser1',
        email: 'same@example.com',
        password: 'password123',
      });

      await expect(
        authService.signup({
          username: 'UniqueUser2',
          email: 'same@example.com',
          password: 'password123',
        }),
      ).rejects.toThrow('Email is already registered');
    });

    it('should successfully log in with username or email', async () => {
      await authService.signup({
        username: 'LoginHero',
        email: 'hero@realmforge.gg',
        password: 'HeroPassword123',
      });

      // Login by username
      const loginByName = await authService.login({
        usernameOrEmail: 'LoginHero',
        password: 'HeroPassword123',
      });
      expect(loginByName.user.username).toBe('LoginHero');

      // Login by email
      const loginByEmail = await authService.login({
        usernameOrEmail: 'hero@realmforge.gg',
        password: 'HeroPassword123',
      });
      expect(loginByEmail.user.email).toBe('hero@realmforge.gg');
    });

    it('should fail login with incorrect password', async () => {
      await authService.signup({
        username: 'GuardUser',
        email: 'guard@realmforge.gg',
        password: 'RightPassword',
      });

      await expect(
        authService.login({
          usernameOrEmail: 'GuardUser',
          password: 'WrongPassword',
        }),
      ).rejects.toThrow('Invalid credentials');
    });
  });
});
