import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#090d16',
          secondary: '#0f172a',
          card: 'rgba(15, 23, 42, 0.75)',
          hover: 'rgba(30, 41, 59, 0.8)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
        },
        tech: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          amber: '#f59e0b',
          rose: '#f43f5e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#cbd5e1',
            h1: { color: '#f8fafc', fontWeight: '700' },
            h2: { color: '#f8fafc', fontWeight: '600', marginTop: '1.75em', marginBottom: '0.75em' },
            h3: { color: '#f1f5f9', fontWeight: '600' },
            strong: { color: '#f8fafc' },
            a: { color: '#38bdf8', '&:hover': { color: '#7dd3fc' }, textDecoration: 'none' },
            code: { color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '0.2em 0.4em', borderRadius: '0.25rem', fontWeight: '400' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            hr: { borderColor: 'rgba(255, 255, 255, 0.1)' },
            blockquote: { borderLeftColor: '#10b981', color: '#94a3b8' },
          },
        },
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(16, 185, 129, 0.15)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.15)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.15)',
      },
    },
  },
  plugins: [typography],
};
