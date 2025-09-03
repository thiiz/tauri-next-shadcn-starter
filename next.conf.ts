import type { NextConfig } from 'next';
const isProd = process.env.NODE_ENV === 'production';
const internalHost = process.env.TAURI_DEV_HOST || 'localhost';
// Define the base Next.js configuration
const baseConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
  transpilePackages: ['geist']
};

let configWithPlugins = baseConfig;

const nextConfig = configWithPlugins;
export default nextConfig;
