import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Marca Ofiponiente / Planificación de Oficinas — portado de RapidOffice (Fase 0)
        ofi: {
          black: '#000000',
          white: '#FFFFFF',
          offwhite: '#F5F5F5',
          pink: '#EA43A5',
          'pink-dark': '#C92E88',
          'pink-light': '#F7C5E3',
          gray: '#505050',
          border: '#1E1E1E',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Clash Display', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
