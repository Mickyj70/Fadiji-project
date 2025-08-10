/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx}", // your JSX files
  "./src/**/*.{ts,tsx}", // optional if you have any TS/TSX
];
export const theme = {
  container: {
    center: true,
    padding: "1rem",
    screens: { "2xl": "1200px" }, // matches the layout’s max width
  },
  extend: {
    // Subtle shadows to match the UI look
    boxShadow: {
      card: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)",
    },
    borderRadius: {
      xl: "0.75rem",
      "2xl": "1rem",
    },
  },
};
export const plugins = [];
