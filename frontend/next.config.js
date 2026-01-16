const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    
    // Fix for Konva: prevent webpack from trying to bundle 'canvas' server-side module
    config.resolve.alias.canvas = false;
    
    return config;
  },
};

module.exports = nextConfig; 
