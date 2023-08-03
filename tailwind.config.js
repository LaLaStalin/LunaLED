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
      ss: { max: "570px" },
      sm: { max: "770px" },
      md: { max: "990px" },
      lg: { max: "1200px" },
      xl: { max: "1440px" },
    },

    colors: {
      text: {
        primaryLight: "#050505",
        primaryDark: "#E4E6EB",

        secondaryLight: "#65676B",
        secondaryDark: "#B0B3B8",
      },

      Primary: {
        mainLight: "#1876F2",
        mainDark: "#90CAF9",
      },

      backgroundLight: "#FAFAFA",
      backgroundDark: "#161616",

      paperLight: "#FFFFFF",
      paperDark: "#1E1E1E",

      dividerLight: "rgb(0 0 0)",
      dividerDark: "rgb(255 255 255)",

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
        "hero-banner": "url('/assets/banner/bg-HeroBanner.png')",
      },
    },
  },
  plugins: [],
};
