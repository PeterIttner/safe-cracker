// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "public": '/',
    "src": '/dist',
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    htmlFragments: true,
    baseUrl: "https://ittner.it/jungschar/",
  },
  optimize: {
    bundle: true,
    target: 'es2018',
    minify: true,
    sourcemap: "inline",
  },
};
