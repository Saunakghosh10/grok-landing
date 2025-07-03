/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        border: "var(--border)",
        zinc: {
          800: "#27272a",
          900: "#18181b"
        },
        neutral: {
          600: "#525252"
        }
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "monospace"],
        sans: ["var(--font-geist-sans)", "system-ui"],
      },
    },
  },
  plugins: [],
}; 