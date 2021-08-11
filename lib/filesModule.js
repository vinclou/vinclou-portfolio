import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const ROOT = path.join(process.cwd(), 'data');

export async function getFiles(folderPath) {
  return fs.readdirSync(path.join(ROOT, folderPath));
}

export async function getAllFiles(folderPath) {
  // reads in sync
  const files = fs.readdirSync(path.join(ROOT, folderPath));

  return files.reduce((allFiles, fileSlug) => {
    const source = fs.readFileSync(
      path.join(ROOT, folderPath, fileSlug),
      'utf8'
    );

    const { data } = matter(source);

    return [
      {
        // content,
        ...data,
        slug: fileSlug.replace('.mdx', '')
      },
      ...allFiles
    ];
  }, []);
}
