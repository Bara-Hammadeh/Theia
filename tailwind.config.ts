import type { Config } from "tailwindcss";

/**
 * Theia design system — Tailwind theme.
 * Colors are wired to CSS custom properties (RGB channel triplets) so alpha
 * modifiers work (e.g. `bg-accent/10`) and the palette lives in one place
 * (see globals.css :root).
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
        iris: "rgb(var(--iris) / <alpha-value>)",
        signal: "rgb(var(--signal) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.02em" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--accent) / 0.14), 0 0 40px -8px rgb(var(--accent) / 0.35)",
        "glow-iris":
          "0 0 0 1px rgb(var(--iris) / 0.14), 0 0 44px -8px rgb(var(--iris) / 0.4)",
        card: "0 1px 0 0 rgb(255 255 255 / 0.04) inset, 0 24px 60px -30px rgb(0 0 0 / 0.8)",
        lift: "0 30px 80px -40px rgb(0 0 0 / 0.9)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgb(var(--accent) / 0.14), transparent 70%)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-24px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.6" },
          "50%": { transform: "translate3d(3%, -4%, 0) scale(1.08)", opacity: "0.9" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "40%, 60%": { opacity: "1" },
          "100%": { transform: "translateY(400%)", opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        aurora: "aurora 14s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        scan: "scan 5.5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
