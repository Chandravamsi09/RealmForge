import jwt from 'jsonwebtoken';
import { JwtPayload, UserRole } from '@realmforge/shared';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret_key_realmforge_change_in_prod';
const ACCESS_TOKEN_EXPIRY = '7d';
const REFRESH_TOKEN_EXPIRY = '30d';

export function signAccessToken(payload: { userId: string; username: string; role: UserRole }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
}

export function signRefreshToken(payload: { userId: string; username: string; role: UserRole }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}
