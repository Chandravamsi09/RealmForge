export enum UserRole {
  PLAYER = 'PLAYER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  eloRating: number;
  isBanned: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  userId: string;
  avatar: string;
  level: number;
  xp: number;
  gold: number;
  gems: number;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // in seconds
}

export interface UserWithProfile extends User {
  profile: UserProfile;
}

export interface AuthResponse {
  user: UserWithProfile;
  tokens: AuthTokens;
}

export interface JwtPayload {
  userId: string;
  username: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}
