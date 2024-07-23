/** @type {import('next').NextConfig} */
const nextConfig = {
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

  // Ignorar errores durante la construcción
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // Una hora de inactividad
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
