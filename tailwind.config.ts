import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        lora: ['var(--font-lora)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
