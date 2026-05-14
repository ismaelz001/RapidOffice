import '../styles/globals.css';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata = {
  title: 'Ofiponiente — Mobiliario de Oficina en Almería',
  description: 'Distribuidor oficial de mobiliario de oficina premium en El Ejido, Almería. Haworth, Forma 5, Actiu, Sedus. Más de 30 años equipando espacios de trabajo.',
  keywords: 'mobiliario oficina Almería, equipamiento oficinas El Ejido, distribuidor Haworth Almería, sillería ergonómica Almería',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
        />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
