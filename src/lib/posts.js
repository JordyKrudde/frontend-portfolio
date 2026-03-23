import { marked } from 'marked'

// Vite: import all markdown files as raw strings eagerly
const postModules = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const yamlStr = match[1]
  const content = match[2]
  const data = {}

  yamlStr.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    let value = line.slice(colonIdx + 1).trim()

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map(v => v.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
    } else {
      value = value.replace(/^['"]|['"]$/g, '')
    }

    data[key] = value
  })

  return { data, content: content.trim() }
}

function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / 200)
}

export function getAllPosts() {
  return Object.entries(postModules)
    .map(([filepath, raw]) => {
      const slug = filepath.replace('../posts/', '').replace('.md', '')
      const { data, content } = parseFrontmatter(raw)
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date ? new Date(data.date) : new Date(),
        description: data.description || '',
        tags: Array.isArray(data.tags)
          ? data.tags
          : data.tags
          ? [data.tags]
          : [],
        readingTime: estimateReadingTime(content),
        content,
      }
    })
    .sort((a, b) => b.date - a.date)
}

export function getPostBySlug(slug) {
  return getAllPosts().find(p => p.slug === slug)
}

export function renderMarkdown(content) {
  return marked(content, { breaks: true, gfm: true })
}
