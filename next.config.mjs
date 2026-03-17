import path from "path";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/finallyinfluencingtrends" : "",
  assetPrefix: isProd ? "/finallyinfluencingtrends/" : undefined,
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;