const forms = require("@tailwindcss/forms");

const lineClamp = require("./lib/tailwind/line-clamp");


module.exports = {
  darkMode: "media",
  theme: {
    extend: {
      fontSize: {
        tiny: ["0.625rem", { lineHeight: "0.625rem", letterSpacing: "0.1rem" }],
      },
      scale: {
        '250': '2.5',
      }
    },
    colors: {
      navyblue: "#0B1D32",
      mainblue: "#27A2F8",
      white: "#FFFFFF",
      black: "#000",
      navybluesoft: "rgba(11, 29, 50, 0.2)",
      softerblue: "rgba(39, 162, 248, 0.4)",
      middleblue: "#004869",
      blur: "rgba(0, 72, 105, 0.1)",
      transparent: "transparent",
      gray: "#707174",
      red: "#FF1D32",
      orange: "#FF8132",
      orange2: '#FFAF20',
      yellow: "#FBFB32",
      sky: "#78C8FA",
      purple: "#9524E3",
      green: "#52E38F",
      seabed: '#111827'
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 600,
      bolder: 700,
    },
    fontFamily: {
      sans: "Niveau Grotesk",
    },
  },
  plugins: [forms, lineClamp],
};
