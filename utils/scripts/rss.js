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
