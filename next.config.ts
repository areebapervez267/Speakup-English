import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/help",
        destination: "/contact",
        permanent: true,
      },
      // Google discovered /fɪʃ/ from IPA text; HTTP clients send it encoded.
      {
        source: "/f%C4%B1%CA%B6",
        destination: "/courses/sounds-of-english/lessons/short-vowel-sounds",
        permanent: true,
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
