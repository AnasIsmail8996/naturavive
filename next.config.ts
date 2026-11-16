import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 75, 80],
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  poweredByHeader: false,
  compress: true,
  experimental: {
    // Cursor-only feedback is not needed in GoDaddy production.
    optimizePackageImports: ["lucide-react", "motion", "swiper"],
  },
  // Keep Cache Components for App Router performance; production uses .next after build.
  cacheComponents: true,
  partialPrefetching: true,
  // Turbopack rules stay for local `next dev` only. Production build uses webpack (`npm run build`).
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
