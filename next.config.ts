import type { NextConfig } from "next";

// When GITHUB_PAGES=true is passed (e.g. inside GitHub Actions), Next.js exports
// static HTML/CSS/JS and configures the repository subpath for GitHub Pages.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "Wedding-invitation-";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
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
