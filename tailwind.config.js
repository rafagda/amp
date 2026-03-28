/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{md,html}',
    './archetypes/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Color del logo #607d8b (Identidad de marca)
        primary: {
          50: '#f0f4f5',
          100: '#dae3e7',
          200: '#b5c7cf',
          300: '#90abb7',
          400: '#6b8f9f',
          500: '#607d8b',  // COLOR DEL LOGO
          600: '#4d6470',
          700: '#3a4b54',
          800: '#273238',
          900: '#14191c',
        },
        // Accent - Terracota #c98869 (Calidez y destacados)
        accent: {
          50: '#fdf7f4',
          100: '#faeee8',
          200: '#f5ddd1',
          300: '#ebc4b0',
          400: '#dfa583',
          500: '#c98869',
          600: '#b56f53',
          700: '#945840',
          800: '#6d4130',
          900: '#462a1f',
        },
        // Slate - Grises neutros con tinte azulado
        slate: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e3e7eb',
          300: '#cbd3db',
          400: '#a8b4bf',
          500: '#7c8a96',
          600: '#5f6d78',
          700: '#47535c',
          800: '#313a42',
          900: '#1d2428',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'custom': '0 10px 40px -10px rgba(96, 125, 139, 0.2)',
        'custom-hover': '0 20px 50px -15px rgba(96, 125, 139, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
