import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|png)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next/static/images',
            outputPath: 'static/images',
            fallback: 'file-loader',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
