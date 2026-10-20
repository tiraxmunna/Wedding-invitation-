import type { NextConfig } from "next";

// When GITHUB_PAGES=true is passed (e.g. inside GitHub Actions), Next.js exports
// static HTML/CSS/JS and configures the repository subpath for GitHub Pages.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "Wedding-invitation-";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
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
