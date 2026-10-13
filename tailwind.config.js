/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B2545",
          dark: "#0B2545",
          medium: "#13315C",
          light: "#0B2545",
        },
        secondary: "#13315C",
        "bg-light": "#EEF4FB",
        cta: {
          DEFAULT: "#FF9F1C",
          hover: "#E88A00",
        },
        accent: "#FFC857",
        "text-primary": "#1B2430",
        "text-secondary": "#5B6675",
        white: "#FFFFFF",
        whatsapp: "#25D366",
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(11, 37, 69, 0.08)",
        card: "0 2px 12px rgba(11, 37, 69, 0.06)",
        cta: "0 4px 14px rgba(255, 159, 28, 0.35)",
        whatsapp: "0 4px 14px rgba(37, 211, 102, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}