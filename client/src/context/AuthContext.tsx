import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserWithProfile, AuthResponse } from '@realmforge/shared';

interface AuthContextType {
  user: UserWithProfile | null;
  token: string | null;
  isLoading: boolean;
  login: (credentials: { usernameOrEmail: string; password: string }) => Promise<void>;
  signup: (payload: { username: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
  updateUser: (user: UserWithProfile) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserWithProfile | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('rf_token'));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadUser() {
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const res = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          logout();
        }
      } catch {
        logout();
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, [token]);

  const login = async (credentials: { usernameOrEmail: string; password: string }) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to login');

    const authRes = data as AuthResponse;
    setUser(authRes.user);
    setToken(authRes.tokens.accessToken);
    localStorage.setItem('rf_token', authRes.tokens.accessToken);
  };

  const signup = async (payload: { username: string; email: string; password: string }) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to sign up');

    const authRes = data as AuthResponse;
    setUser(authRes.user);
    setToken(authRes.tokens.accessToken);
    localStorage.setItem('rf_token', authRes.tokens.accessToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('rf_token');
  };

  const updateUser = (updated: UserWithProfile) => {
    setUser(updated);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
