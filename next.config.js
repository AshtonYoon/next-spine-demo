const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(
  ["@esotericsoftware/spine-canvas", "@esotericsoftware/spine-core"],
  {
    unstable_webpack5: true,
  }
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins([withTM], [nextConfig]);
