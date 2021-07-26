/**
 *  TODO: next-mdx-remote is not a library I want to use
 *  it's not working right out of the box, and I still can't move function
 *  from getStaticProps to its own mdx dedicated utility file,
 *  that's so annoying.
 */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { MdxComponents } from '@/components/mdx-components';

import { ContentWrapper } from '@/layouts/contentWrapper';
import { BlogContainer } from '@/layouts/blogContainer';

import { postFilePaths, POSTS_PATH } from '@/utils/mdx';

/**
 * This is individual blog page
 * Accepts: { source } ---> MDXRemote object
 *          { fronMatter } ---> file data and extras
 */
export default function BlogPage({ source, frontMatter }) {
  return (
    <ContentWrapper>
      {/* check if it is within main */}
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={MdxComponents} />
      </main>
    </ContentWrapper>
  );
}

// export const getStaticProps = async ({ params }) => {
//   const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
//   const source = fs.readFileSync(postFilePath);

//   const { content, data } = matter(source);

//   const mdxSource = await serialize(content, {
//     // Optionally pass remark/rehype plugins
//     // Research what them
//     mdxOptions: {
//       remarkPlugins: [],
//       rehypePlugins: []
//     },
//     scope: data
//   });

// return {
//   props: {
//     source: mdxSource,
//     frontMatter: {
//       wordCount: content.split(/\s+/gu).length,
//       readingTime: readingTime(content),
//       slug: slug || null,
//       ...data
//     }
//   }
// };
// };
export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
        slug: params.slug || null,
        ...data
      }
    }
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
