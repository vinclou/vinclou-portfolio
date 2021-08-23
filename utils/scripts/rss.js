// /**
//  * This script is intended to run server side during the build time
//  * on Vercel and localhost for testing
//  */
// // misc test
// // import { serialize } from 'next-mdx-remote/serialize';
// // import mdxPrism from 'mdx-prism';
// // import { MDXRemote } from 'next-mdx-remote';

// const serialize = require('next-mdx-remote/serialize').serialize;
// const mdxPrism = require('mdx-prism');
// const MDXRemote = require('next-mdx-remote').MDXRemote;
// const MDXProvider = require('@mdx-js/react').MDXProvider;
// const MDXComponents = require('../../components/mdx-components/index');
// const ReactDOMServer = require('react-dom/server');

// const { promises: fs } = require('fs');
// const path = require('path');
// const Feed = require('feed').Feed;
// const matter = require('gray-matter');

// // import fs from 'fs';
// // import path from 'path';
// // import matter from 'gray-matter';
// // import ReactDOMServer from 'react-dom/server';
// // import MDXComponents from '../../components/mdx-components';
// // import { MDXRemote } from 'next-mdx-remote';
// // import { MDXProvider } from '@mdx-js/react';
// // import mdxPrism from 'mdx-prism';
// // import { serialize } from 'next-mdx-remote/serialize';
// // import { Feed } from 'feed';

// const POSTS_PATH = path.join(process.cwd(), 'data', 'posts');
// // const RSS = require('rss');

// // async function generate() {
// //   const feed = new RSS({
// //     title: 'Vincent Arlou',
// //     site_url: 'https://vincentarlou.com',
// //     feed_url: 'https://vincentarlou.com/feed.xml'
// //   });

// //   const posts = await fs.readdir(POSTS_PATH);

// //   await Promise.all(
// //     posts.map(async (filePath) => {
// //       const content = await fs.readFile(path.join(POSTS_PATH, filePath));
// //       const frontMatter = matter(content);
// //       // console.log(frontMatter);

// //       feed.item({
// //         title: frontMatter.data.title,
// //         url: 'https://vincentarlou.com/blog/' + filePath.replace(/\.mdx?/, ''),
// //         date: frontMatter.data.date,
// //         description: frontMatter.data.summary
// //       });
// //     })
// //   );

// //   await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
// // }

// // generate();

// async function generate() {
//   const baseUrl = 'https://vincentarlou.com';

//   const feed = new Feed({
//     title: 'Articles by Vincent Arlou',
//     description: 'The blog about people, tech and 42',
//     id: baseUrl,
//     link: baseUrl,
//     // language: 'en',
//     copyright: 'All rights reserved 2021, Vincent Arlou',
//     feedLinks: {
//       rss2: `${baseUrl}/feed.xml`
//     },
//     author: {
//       name: 'Vincent Arlou',
//       email: 'arlou@protonmail.com',
//       link: baseUrl
//     }
//   });

//   const posts = await fs.readdir(POSTS_PATH);

//   // await Promise.all(
//   posts.map(async (filePath) => {
//     const source = await fs.readFile(path.join(POSTS_PATH, filePath));
//     const { content, data } = matter(source);
//     // console.log('Content:', content);
//     // console.log('Data:', data);
//     const mdxSource = await serialize(content, {
//       scope: data,
//       mdxOptions: {
//         remarkPlugins: [
//           // require('remark-slug'),
//           // [
//           //   require('remark-autolink-headings'),
//           //   {
//           //     linkProperties: {
//           //       className: ['anchor']
//           //     }
//           //   }
//           // ],
//           // require('remark-code-titles')
//         ],
//         rehypePlugins: []
//       }
//       // target: ['esnext']
//     });
//     console.log(mdxSource);

//     const mdx = <MDXRemote {...mdxSource} />;
//     const html = ReactDOMServer.renderToStaticMarkup(mdx);

//     const url =
//       'https://vincentarlou.com/blog/' + filePath.replace(/\.mdx?/, '');

//     feed.addItem({
//       title: data.title,
//       id: url,
//       link: url,
//       description: data.description,
//       content: html,
//       // content: ReactDOMServer.renderToStaticMarkup(
//       //   <MDXProvider components={MDXComponents}>
//       //     <MDXRemote {...mdxSource} />
//       //   </MDXProvider>
//       // ),
//       author: [
//         {
//           name: 'Vincent Arlou',
//           email: 'arlou@protonmail.com',
//           link: baseUrl
//         }
//       ],
//       date: data.date
//     });
//   });
//   // );

//   await fs.writeFile('./public/feed.xml', feed.rss2());
//   await fs.writeFile('./public/feed.json', feed.json1());
// }

// generate();
// // generate().catch((e) => console.debug(e));
// // generate().then(() => console.log('Generating xml feed'));

/**
 * This script is intended to run server sid during the build time
 * on Vercel and localhost for testing
 */
const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const POSTS_PATH = path.join(process.cwd(), 'data', 'posts');

async function generate() {
  const feed = new RSS({
    title: 'Vincent Arlou',
    site_url: 'https://vincentarlou.com',
    feed_url: 'https://vincentarlou.com/feed.xml'
  });

  const posts = await fs.readdir(POSTS_PATH);

  await Promise.all(
    posts.map(async (filePath) => {
      const content = await fs.readFile(path.join(POSTS_PATH, filePath));
      const frontMatter = matter(content);
      // console.log(frontMatter);

      feed.item({
        title: frontMatter.data.title,
        url: 'https://vincentarlou.com/blog/' + filePath.replace(/\.mdx?/, ''),
        date: frontMatter.data.date,
        description: frontMatter.data.summary
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
