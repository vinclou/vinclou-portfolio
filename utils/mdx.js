import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';

const ROOT = path.join(process.cwd(), 'data');

/**
 * 	Used in [slug]
 *
 *  Returns Object { mdxSource obj, frontMatter obj }
 */
export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(ROOT, type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(ROOT, `${type}.mdx`), 'utf8');

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor']
            }
          }
        ],
        require('remark-code-titles')
      ],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            keepBackground: false,
            onVisitLine(node) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }];
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push('line--highlighted');
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ['word--highlighted'];
            }
          }
        ]
      ]
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