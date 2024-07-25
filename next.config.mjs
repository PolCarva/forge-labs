/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://mvdsoft.com.uy/API_LAB/public/:path*", // Proxy a la API externa
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thotcomputacion.com.uy",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Agregar regla para cargar archivos .glb y .gltf
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/models/",
            publicPath: "/_next/static/models/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
