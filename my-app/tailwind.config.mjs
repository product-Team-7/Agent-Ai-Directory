/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2EFFD5",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#FF2EF1",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#141414",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#141414",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "suisse-bold": ["SuisseIntl-Bold", "sans-serif"],
        "suisse-light": ["SuisseIntl-Light", "sans-serif"],
        "suisse-medium": ["SuisseIntl-Medium", "sans-serif"],
        "suisse-regular": ["SuisseIntl-Regular", "sans-serif"],
        "suisse-semibold": ["SuisseIntl-SemiBold", "sans-serif"],
        instrument: ['"Instrument Serif"', "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

