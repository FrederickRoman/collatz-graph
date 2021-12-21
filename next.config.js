const withPWA = require("next-pwa");

module.exports = {
  reactStrictMode: true,
  ...withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  }),
};
