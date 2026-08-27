import { z } from 'zod';
import { AuthResponse, UserRole, UserWithProfile } from '@realmforge/shared';
import { IUserRepository, defaultUserRepository } from './user.repository';
import { hashPassword, comparePassword } from './password';
import { signAccessToken, signRefreshToken, verifyToken } from './jwt';

export const SignupSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username may only contain letters, numbers, and underscores'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password is too long'),
  role: z.nativeEnum(UserRole).optional(),
});

export const LoginSchema = z.object({
  usernameOrEmail: z.string().min(1, 'Username or Email is required'),
  password: z.string().min(1, 'Password is required'),
});

export class AuthService {
  constructor(private userRepo: IUserRepository = defaultUserRepository) {}

  async signup(input: z.infer<typeof SignupSchema>): Promise<AuthResponse> {
    const validated = SignupSchema.parse(input);

    const existingUser = await this.userRepo.findByUsername(validated.username);
    if (existingUser) {
      throw new Error('Username is already taken');
    }

    const existingEmail = await this.userRepo.findByEmail(validated.email);
    if (existingEmail) {
      throw new Error('Email is already registered');
    }

    const passwordHash = await hashPassword(validated.password);

    const user = await this.userRepo.create({
      username: validated.username,
      email: validated.email,
      passwordHash,
      role: validated.role || UserRole.PLAYER,
    });

    const tokens = {
      accessToken: signAccessToken({ userId: user.id, username: user.username, role: user.role }),
      refreshToken: signRefreshToken({ userId: user.id, username: user.username, role: user.role }),
      expiresIn: 7 * 24 * 60 * 60,
    };

    return { user, tokens };
  }

  async login(input: z.infer<typeof LoginSchema>): Promise<AuthResponse> {
    const validated = LoginSchema.parse(input);

    const isEmail = validated.usernameOrEmail.includes('@');
    const user = isEmail
      ? await this.userRepo.findByEmail(validated.usernameOrEmail)
      : await this.userRepo.findByUsername(validated.usernameOrEmail);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (user.isBanned) {
      throw new Error('This account has been suspended');
    }

    const hash = await this.userRepo.getPasswordHash(user.id);
    if (!hash) {
      throw new Error('Invalid credentials');
    }

    const isValid = await comparePassword(validated.password, hash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const tokens = {
      accessToken: signAccessToken({ userId: user.id, username: user.username, role: user.role }),
      refreshToken: signRefreshToken({ userId: user.id, username: user.username, role: user.role }),
      expiresIn: 7 * 24 * 60 * 60,
    };

    return { user, tokens };
  }

  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    try {
      const payload = verifyToken(refreshToken);
      const user = await this.userRepo.findById(payload.userId);
      if (!user) {
        throw new Error('User not found');
      }
      if (user.isBanned) {
        throw new Error('User is suspended');
      }

      const tokens = {
        accessToken: signAccessToken({ userId: user.id, username: user.username, role: user.role }),
        refreshToken: signRefreshToken({ userId: user.id, username: user.username, role: user.role }),
        expiresIn: 7 * 24 * 60 * 60,
      };

      return { user, tokens };
    } catch {
      throw new Error('Invalid or expired refresh token');
    }
  }

  async getMe(userId: string): Promise<UserWithProfile> {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}

export const authService = new AuthService();
