import '@/styles/globals.css';
import { getSiteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

/**
 * NOTA (Fase 0): la tipografía display de marca (Clash Display) requiere
 * verificar licencia antes de producción. Hasta entonces, --font-display
 * usa la pila del sistema vía Tailwind. Se sustituirá por la fuente local.
 */

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Planificación de Oficinas by Ofiponiente',
    template: '%s · Planificación de Oficinas',
  },
  description:
    'Proyectos integrales de mobiliario y equipamiento de oficina: planificación, catálogo y montaje.',
  robots: {
    // En staging/demo no se indexa (máster 12.7 / 13.12)
    index: process.env.APP_ENV === 'production',
    follow: process.env.APP_ENV === 'production',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="min-h-[100dvh] font-sans antialiased">{children}</body>
    </html>
  );
}
