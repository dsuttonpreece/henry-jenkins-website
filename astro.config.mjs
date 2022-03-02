export default {
  buildOptions: {
    site: "https://www.henryjenkins.com.au",
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    port: 3003,
  },
  renderers: ["@astrojs/renderer-preact"],
};
