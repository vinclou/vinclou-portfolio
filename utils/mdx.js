import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote } from 'next-mdx-remote';
// import { MdxComponents } from '@/components/mdx-components';
import readingTime from 'reading-time';
// import mdxPrism from 'mdx-prism'
export const POSTS_PATH = path.join(process.cwd(), 'data', 'posts');
/**
 * postFilePaths is the list of all mdx files inside the POSTS_PATH directory
 * Only include md(x) files
 * Returns Array<string>
 */
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const getSlug = (filePath) => {
  const spt = filePath.split('.');
  return spt[0];
};

/**
 * Used in main blog page
 *
 * return Array containing data
 */
export function getAllFiles() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    // You probably need only data, I don't think there's a need to pass content
    const { content, data } = matter(source);
    // console.log(content, data);
    // console.log(filePath);
    return {
      content,
      data,
      filePath
    };
  });

  return { posts };
}
/**
 * 	Used in Blog[slug]
 *
 *  Returns
 */
export async function getFileBySlug(slug) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    // Research what them
    mdxOptions: {
      remarkPlugins: [
        // require('remark-autolink-headings'),
        // require('remark-slug'),
        // require('remark-code-titles')
      ],
      rehypePlugins: []
      //rehypePlugins: [mdxPrism]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  };
}
