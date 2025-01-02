import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        amethyst: {
          50: "hsl(256, 39%, 76%)",
          100: "hsl(256, 40%, 71%)",
          200: "hsl(257, 40%, 66%)",
          300: "hsl(256, 40%, 62%)",
          400: "hsl(257, 39%, 57%)",
          500: "hsl(256, 40%, 52%)",
          600: "hsl(256, 36%, 47%)",
          700: "hsl(256, 37%, 42%)",
          800: "hsl(256, 37%, 36%)",
          900: "hsl(256, 37%, 31%)",
          950: "hsl(256, 37%, 26%)",
        },
        celadon: {
          50: "hsl(144, 61%, 86%)",
          100: "hsl(144, 60%, 83%)",
          200: "hsl(144, 60%, 80%)",
          300: "hsl(144, 60%, 78%)",
          400: "hsl(144, 60%, 75%)",
          500: "hsl(144, 59%, 72%)",
          600: "hsl(144, 42%, 65%)",
          700: "hsl(144, 31%, 58%)",
          800: "hsl(143, 23%, 50%)",
          900: "hsl(144, 23%, 43%)",
          950: "hsl(144, 23%, 36%)",
        },
        mint: {
          50: "hsl(171, 35%, 85%)",
          100: "hsl(171, 36%, 82%)",
          200: "hsl(171, 36%, 78%)",
          300: "hsl(171, 36%, 71%)",
          400: "hsl(171, 36%, 68%)",
          500: "hsl(171, 36%, 64%)",
          600: "hsl(171, 27%, 57%)",
          700: "hsl(171, 21%, 51%)",
          800: "hsl(171, 20%, 45%)",
          900: "hsl(171, 20%, 38%)",
          950: "hsl(171, 20%, 32%)",
        },
        stone: {
          50: "hsl(253, 4%, 59%)",
          100: "hsl(251, 4%, 51%)",
          200: "hsl(254, 6%, 43%)",
          300: "hsl(255, 9%, 35%)",
          400: "hsl(251, 12%, 27%)",
          500: "hsl(253, 20%, 19%)",
          600: "hsl(254, 20%, 17%)",
          700: "hsl(255, 21%, 15%)",
          800: "hsl(249, 19%, 13%)",
          900: "hsl(251, 19%, 11%)",
          950: "hsl(252, 21%, 9%)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
