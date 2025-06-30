import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'

const ROOT = path.join(process.cwd(), 'data')

export async function getFiles(folderPath: string) {
  return fs.readdirSync(path.join(ROOT, folderPath))
}

export async function getAllFiles(folderPath: string) {
  const files = fs.readdirSync(path.join(ROOT, folderPath))

  return files.reduce((allFiles: any[], fileSlug: string) => {
    const source = fs.readFileSync(
      path.join(ROOT, folderPath, fileSlug),
      'utf8'
    )

    const { data } = matter(source)

    return [
      {
        ...data,
        slug: fileSlug.replace('.mdx', '')
      },
      ...allFiles
    ]
  }, [])
}

export async function getFileBySlug(type: string, slug?: string) {
  const source = slug
    ? fs.readFileSync(path.join(ROOT, type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(ROOT, `${type}.mdx`), 'utf8')

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [
        remarkSlug,
        [
          remarkAutolinkHeadings,
          {
            linkProperties: {
              className: ['anchor']
            }
          }
        ]
      ],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            keepBackground: false,
            onVisitLine(node: any) {
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }]
              }
            },
            onVisitHighlightedLine(node: any) {
              node.properties.className.push('line--highlighted')
            },
            onVisitHighlightedWord(node: any) {
              node.properties.className = ['word--highlighted']
            }
          }
        ]
      ]
    }
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  }
}