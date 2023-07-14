/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    screens: {
      ss: "570px",
      sm: "770px",
      md: "990px",
      lg: "1200px",
      xl: "1440px",
    },

    colors: {
      text: {
        primaryLight: "rgb(0 0 0/87)",
        primaryDark: "#FFFFFF",

        secondaryLight: "rgb(0 0 0/60)",
        secondaryDrak: "rgb(255 255 255/70)",
      },

      backgroundLight: "#FAFAFA",
      backgroundDark: "#161616",

      paperLight: "#FFFFFF",
      paperDark: "#1E1E1E",

      dividerLight: "rgb(0 0 0/12)",
      dividerDark: "rgb(255 255 255/12)",

      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: "#8492a6",
    },

    fontFamily: {
      sans: ["Roboto"],
      roboto: ["Roboto", "sans-serif"],
    },

    fontSize: {
      sm: "12px",
      md: "16px",
      lg: "18px",
      xl: "24px",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
