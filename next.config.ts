import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
   ignoreBuildErrors:true
  },
  eslint:{
    ignoreDuringBuilds:true
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = [...config.externals, 'sanity', 'sanity/structure'];
    }
    return config;
  },

  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },

  productionBrowserSourceMaps: false, // Disables source maps in production for security

  reactStrictMode: true, // Enables React strict mode for better debugging

  /* Additional configuration options can be added here */
};

export default nextConfig;
