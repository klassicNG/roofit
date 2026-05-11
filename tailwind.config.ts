import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#166534", // New: Deep Emerald Green (Prestige & Growth)
          foreground: "#f8fafc",
        },
        secondary: {
          DEFAULT: "#c4a77d", // New: Antique Brass (Engineering Wealth)
          foreground: "#111827",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#052e16", // Deep Forest for overlays
          foreground: "#94a3b8",
        },
        accent: {
          DEFAULT: "#1f2937",
          foreground: "#f8fafc",
        },
        popover: {
          DEFAULT: "#03150b", // The deepest dark emerald
          foreground: "#f8fafc",
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
    },
  },
  plugins: [],
} satisfies Config;
