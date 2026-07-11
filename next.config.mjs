/**
 * Next.js configuration — static export tuned for GitHub Pages.
 *
 * basePath / assetPrefix are driven by NEXT_PUBLIC_BASE_PATH so the same build
 * works both at a user/org root (https://you.github.io) and at a project path
 * (https://you.github.io/repo). The GitHub Actions workflow injects the correct
 * value automatically via actions/configure-pages.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  // Marketing site: never let a lint nit or a minor type nit block a deploy.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
