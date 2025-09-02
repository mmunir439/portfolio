// filepath: next.config.mjs
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false, // Ignore the canvas module in the browser
    };
    return config;
  },
};

export default nextConfig;