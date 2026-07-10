import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F4C81",
          dark: "#0A3D6B",
        },
        secondary: "#1E88E5",
        accent: "#25D366",
        surface: "#F5FAFF",
        "surface-alt": "#E8F0FE",
        ink: "#1A2238",
        muted: "#6B7280",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      transitionDuration: {
        350: "350ms",
        400: "400ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
