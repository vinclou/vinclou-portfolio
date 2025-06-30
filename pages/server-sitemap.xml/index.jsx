// import { getAllFiles } from '@/utils/mdx';
import { getServerSideSitemap } from 'next-sitemap';
import { getFiles } from '@/lib/filesModule';

const FOLDERS = ['posts', 'newsletter', 'snippets'];

// swaps posts to blog, because data is in posts, but route is actually a /blog
const folderNameHelper = (folderName) =>
  folderName === 'posts' ? 'blog' : folderName;

// returns true if there's a gitignore file
const isGitIgnoreFile = (fileName) => {
  if (
    fileName === 'minimal-template' ||
    fileName === 'sample-post' ||
    fileName === 'test-styles'
  )
    return true;

  return false;
};

async function readFilePaths() {
  let fields = [];

  for (const folder of FOLDERS) {
    const files = await getFiles(folder);

    let folderName = folderNameHelper(folder);
    // console.log(folderName);

    let tmpFields = files.reduce((allFiles, filePath) => {
      const slug = filePath.replace('.mdx', '');

      // ignore element if it's a gitignore file, don't add to site map
      if (isGitIgnoreFile(slug)) return allFiles;

      return [
        {
          loc: `https://www.vincentarlou.com/${folderName}/${slug}`,
          lastmod: new Date().toISOString()
        },
        ...allFiles
      ];
    }, []);

    // merge results
    fields = [...fields, ...tmpFields];

    // console.log(fields);
  }

  return fields;
}

/**
 * Maps available posts to xml
 */
export const getServerSideProps = async (ctx) => {
  const fields = await readFilePaths();

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}

// const files = await getFiles('posts');

// console.log(files);
// generate site-map for the blog page
// const fields = files.map((filePath) => ({
//   loc: `https://www.vincentarlou.com/blog/${filePath.replace('.mdx', '')}`,
//   lastmod: new Date().toISOString()
// }));

// console.log(fields);
