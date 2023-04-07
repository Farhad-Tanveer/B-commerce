/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f444bf",

          secondary: "#5ed6b4",

          accent: "#3affa9",

          neutral: "#1B1826",

          "base-100": "#F2F2F3",

          info: "#9CD6EC",

          success: "#24A86A",

          warning: "#FBBB4B",

          error: "#F21C4B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
