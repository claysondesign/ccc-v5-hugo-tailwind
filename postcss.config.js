module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["themes/ccc-v5/assets/css"],
    }),
    require("tailwindcss"),
    require("postcss-preset-env")({ stage: 1 }),
    require("postcss-clean"),
  ],
};
