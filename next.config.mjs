/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns:["ik.imagekit.io"]
    domains: ["ik.imagekit.io"], // Add other domains as needed
  },
};

export default nextConfig;
