import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  }
};

// ✅ Fix: Use `mdx()`, NOT `createMDX()`
const withMDX = mdx({
  extension: /\.mdx?$/, // Detect MDX files
});

// ✅ Fix: Properly merge MDX config with Next.js config
export default withMDX(nextConfig);
