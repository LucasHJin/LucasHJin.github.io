import createMDX from '@next/mdx'
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

// https://nextjs.org/docs/app/building-your-application/configuring/mdx
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
