import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx", "js", "jsx"],

  outputFileTracingIncludes: {
    "/**": ["components/shilp-ui-components/**/*"],
  },

  async headers() {
    return [
      {
        source: "/r/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);