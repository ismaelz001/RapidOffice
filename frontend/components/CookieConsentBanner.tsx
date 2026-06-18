'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCookieConsent, setCookieConsent, type CookieConsentChoice } from '../lib/cookie-consent';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: CookieConsentChoice) => {
    setCookieConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-3xl text-sm leading-6 text-gray-700">
          Utilizamos cookies tecnicas para el funcionamiento del sitio y para recordar tu eleccion de consentimiento.
          Consulta la politica completa en{' '}
          <Link href="/cookies" className="font-semibold text-primary-600 underline-offset-4 hover:underline">
            Cookies y privacidad
          </Link>
          .
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handleChoice('rejected')}
            className="rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700 transition hover:border-gray-500"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => handleChoice('accepted')}
            className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-primary-700"
          >
            Aceptar
          </button>
        </div>
      </div>
    </aside>
  );
}
