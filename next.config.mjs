/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Agregar regla para cargar archivos .glb y .gltf
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/models/',
              publicPath: '/_next/static/models/',
            },
          },
        ],
      });
  
      return config;
    },
    
  };
  
  export default nextConfig;
  