import React, { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostBySlug, renderMarkdown } from '../lib/posts'

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  const html = useMemo(() => {
    if (!post) return ''
    return renderMarkdown(post.content)
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  return (
    <section className="py-12 md:py-20 px-6 text-white md:mt-20 mt-12 min-h-screen">
      <div className="container mx-auto max-w-2xl">

        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-green-400 transition-colors mb-12 group"
        >
          <span className="transform transition-transform duration-200 group-hover:-translate-x-1">←</span>
          Terug naar blog
        </Link>

        {/* Post header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5">
            <time className="text-sm text-white/40">
              {post.date.toLocaleDateString('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-white/20">·</span>
            <span className="text-sm text-white/40">{post.readingTime} min leestijd</span>
          </div>

          <h1 className="text-4xl md:text-5xl leading-tight mb-5">{post.title}</h1>

          {post.description && (
            <p className="text-lg md:text-xl text-white/55 leading-relaxed">{post.description}</p>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <hr className="border-white/10 mb-12" />

        {/* Markdown content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Footer nav */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-green-400 transition-colors group"
          >
            <span className="transform transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Terug naar alle artikelen
          </Link>
        </div>

      </div>
    </section>
  )
}

export default BlogPost
