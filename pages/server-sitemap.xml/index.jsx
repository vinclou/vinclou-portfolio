// import { getAllFiles } from '@/utils/mdx';
import { getServerSideSitemap } from 'next-sitemap';
import { getSlug, postFilePaths } from '@/utils/mdx';

/**
 * Maps available posts to xml
 */
export const getServerSideProps = async (ctx) => {
  const fields = postFilePaths.map((filePath) => ({
    loc: `https://www.vincentarlou.com/blog/${getSlug(filePath)}`,
    lastmod: new Date().toISOString()
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
