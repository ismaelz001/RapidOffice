import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
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
        clash: ['Clash Display', 'sans-serif'],
        bauhaus: ['Bauhaus 93', 'Bauhaus', 'ITC Bauhaus', 'Righteous', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
