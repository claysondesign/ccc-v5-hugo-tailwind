const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './themes/ccc-v5/layouts/**/*.html',
    ],
  },
  theme: {
    fontFamily: {
      display: ["Karla", "sans-serif"],
      body: ["Karla", "sans-serif"],
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "88rem",
      },
      colors: {
        ccctotalblack: "#0C0C0C",
        cccblack: "#141414",
        cccred: "#B1350E",
        cccblue: "#0A3A49",
        ccccyan: "#126A8D",
        cccgrey: "#CDC7C6",
        cccgreylight: "#EAE9E8",
        blackforlogos: "#2d2d2d",
      },
      letterSpacing: {
        ccc: "0.25em",
      },
    },
  },
  variants: {},
  plugins: [], // if we add forms, do it here
}
