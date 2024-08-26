import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
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
        darkBlue: "#013B51",
        textBrownDark: "#8B572A",
        textBrownLighter: "#8B572A9E",
        bgBrownLight: "#EEE6DB",
        bgPurple: "#9013FE",
        bgBrown: "#8B572A45",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        colorChange: {
          '0%': { background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)' },
          '25%': { background: 'linear-gradient(to right, #fd1d1d, #fcb045, #833ab4)' },
          '50%': { background: 'linear-gradient(to right, #fcb045, #833ab4, #fd1d1d)' },
          '75%': { background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)' },
          '100%': { background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #833ab4' },
          '50%': { boxShadow: '0 0 20px #fd1d1d' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "colorChange": 'colorChange 5s ease-in-out infinite',
        "glow": 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
