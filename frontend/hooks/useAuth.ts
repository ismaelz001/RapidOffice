'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { storage } from '../lib/storage';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = storage.getToken();
    setIsAuthenticated(!!token);
    
    if (!token && !window.location.pathname.match(/\/(login|register)$/)) {
      router.push('/login');
    }
  }, [router]);

  const logout = () => {
    storage.removeToken();
    setIsAuthenticated(false);
    router.push('/login');
  };

  return { isAuthenticated, logout };
}
