/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },

    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
          fs: "empty",
        };
      }

      config.module.rules.push({
        test: /\.scss$/,
        use: [
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./styles"],
              },
            },
          },
        ],
      });

      return config;
    },
  },
};

module.exports = nextConfig;
