import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  membershipType: 'trial' | 'crossfit' | 'comet-plus' | 'open-gym' | 'specialty';
  joinDate: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication on mount
    const checkAuth = () => {
      const isAuth = localStorage.getItem('isAuthenticated') === 'true';
      const userData = localStorage.getItem('user');

      if (isAuth && userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error('Failed to parse user data:', error);
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('user');
        }
      }

      setIsLoading(false);
    };

    checkAuth();

    // Listen for auth state changes
    const handleAuthChange = () => {
      const isAuth = localStorage.getItem('isAuthenticated') === 'true';
      const userData = localStorage.getItem('user');

      if (isAuth && userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error('Failed to parse user data:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  const login = async (email: string, _password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const existingUser = localStorage.getItem('user');
    let userData: User;

    if (existingUser) {
      userData = JSON.parse(existingUser);
    } else {
      // Create a default user for demo purposes
      userData = {
        id: Date.now().toString(),
        email,
        name: email.split('@')[0],
        membershipType: 'crossfit',
        joinDate: new Date().toISOString(),
      };
      localStorage.setItem('user', JSON.stringify(userData));
    }

    localStorage.setItem('isAuthenticated', 'true');
    setUser(userData);
  };

  const signup = async (email: string, _password: string, name: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const userData: User = {
      id: Date.now().toString(),
      email,
      name,
      membershipType: 'trial',
      joinDate: new Date().toISOString(),
    };

    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('auth-change'));
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
