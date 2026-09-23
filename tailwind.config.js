// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        surface: {
          canvas: "#0A0D14",
          card: "#111726",
          elevated: "#1A2234",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(99, 102, 241, 0.35)",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.1)' },
          '66%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 14s ease-in-out infinite',
      },
      fontFamily: {
        mainFont: ["'Outfit'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
