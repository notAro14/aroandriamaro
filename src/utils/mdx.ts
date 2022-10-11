import fs from "fs"
import { join } from "path"
import { bundleMDX } from "mdx-bundler"
import matter from "gray-matter"
import readingTime from "reading-time"

import { isAfter, isBefore } from "./date"

const ROOT = process.cwd()
const POSTS_DIRECTORY = join(process.cwd(), "data", "posts")
const MDX_COMPONENTS_DIRECTORY = join(process.cwd(), "data", "components")

export interface Frontmatter {
  title: string
  description: string
  date: string
  emoji: string
}

export interface Article {
  frontmatter: Frontmatter
  slug: string
}

export const readFileContent = (filename: string) =>
  fs.readFileSync(join(POSTS_DIRECTORY, filename), { encoding: "utf8" })

const getCompiledMDX = async (content: string) => {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = join(
      ROOT,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      ROOT,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    )
  }

  try {
    return await bundleMDX({
      source: content,
      cwd: MDX_COMPONENTS_DIRECTORY,
    })
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknow error type"
    throw new Error(errorMessage)
  }
}

export const getAllArticles = ({ sorted }: { sorted: boolean }) => {
  const articlesUnsorted = fs.readdirSync(POSTS_DIRECTORY).map((filename) => {
    const fileContent = readFileContent(filename)
    const filenameWithoutExtension = filename.replace(/.mdx?$/, "")
    const { data: frontmatter } = matter(fileContent)
    return {
      frontmatter: frontmatter as Frontmatter,
      slug: filenameWithoutExtension,
    }
  })
  if (sorted) {
    return articlesUnsorted.sort((articleA, articleB) => {
      const { date: dateA } = articleA.frontmatter as Frontmatter
      const { date: dateB } = articleB.frontmatter as Frontmatter
      if (isBefore(dateA, dateB)) {
        return 1
      }
      if (isAfter(dateA, dateB)) {
        return -1
      }
      return 0
    })
  }
  return articlesUnsorted
}

export const getSingleArticle = async (slug: string) => {
  const fileContent = readFileContent(`${slug}.mdx`)
  const allArticles = getAllArticles({ sorted: true })
  const currentArticleIndex = allArticles.findIndex(
    (article) => article.slug === slug
  )
  const nextArticle = allArticles[currentArticleIndex - 1]
  const previousArticle = allArticles[currentArticleIndex + 1]

  const { frontmatter, code } = await getCompiledMDX(fileContent)
  return {
    frontmatter: frontmatter as Frontmatter,
    timeToRead: readingTime(fileContent),
    code,
    previousArticle: previousArticle || null,
    nextArticle: nextArticle || null,
  }
}
