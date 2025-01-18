/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1D24',
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#27E193',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#2A2F3A',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#2A2F3A',
          foreground: '#A1A1AA',
        },
        card: {
          DEFAULT: '#1A1D24',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#1A1D24',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#2A2F3A',
          foreground: '#FFFFFF',
        },
        border: '#2A2F3A',
      },
    },
  },
  plugins: [],
}
