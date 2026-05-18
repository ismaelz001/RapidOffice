import '../styles/globals.css';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata = {
  metadataBase: new URL('https://ofiponiente.rodorte.com'),
  title: 'Ofiponiente — Mobiliario de Oficina para Empresas',
  description: 'Distribuidor oficial de mobiliario de oficina premium para empresas en toda España. Haworth, Forma 5, Actiu, Sedus. Más de 30 años equipando espacios de trabajo.',
  keywords: 'mobiliario oficina empresas, equipamiento oficinas España, distribuidor Haworth España, sillería ergonómica oficina, mobiliario corporativo',
  openGraph: {
    title: 'Ofiponiente — Mobiliario de Oficina para Empresas',
    description: 'Distribuidor oficial de mobiliario de oficina premium para empresas en toda España.',
    locale: 'es_ES',
  },
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
