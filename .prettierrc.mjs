/** @type {import("prettier").Config} */
// import config from "prettier-config-standard";

export default {
  // ...config,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
