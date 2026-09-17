import type { NextConfig } from "next";

const basePath = "/tanrongxin";

const nextConfig: NextConfig = {
  // The portfolio has no server-only routes. A static export makes the exact
  // same build deployable on Vercel, EdgeOne Pages, or any Nginx server.
  output: "export",
  trailingSlash: true,
  // 子路径部署：本仓库作为 GitHub Pages 项目站点，挂在 https://trxunho.github.io/tanrongxin/
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
