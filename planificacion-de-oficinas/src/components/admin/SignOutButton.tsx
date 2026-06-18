'use client';

import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="rounded-full border border-ofi-border px-4 py-2 text-sm text-ofi-offwhite/70 transition-colors hover:border-ofi-pink hover:text-ofi-white"
    >
      Cerrar sesión
    </button>
  );
}
