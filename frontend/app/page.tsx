'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { storage } from '../lib/storage';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = storage.getToken();
    if (token) {
      router.push('/projects');
    } else {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-pulse text-primary-600 font-bold">Iniciando...</div>
    </div>
  );
}
