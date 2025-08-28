/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f9f9",   // muted background
        primary: "#2c3e50",      // dark muted navy
        secondary: "#7f8c8d",    // gray muted text
        accent: "#3498db",       // professional blue accent
      },
      fontSize: {
        heading: ["60px", { lineHeight: "60px" }],   // 1:1 ratio
        body: ["16px", { lineHeight: "24px" }],      // 1:1.5 ratio
      },
      spacing: {
        0: "0px",
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px", // follows 8pt grid
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      }
    },
  },
  plugins: [],
}