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
