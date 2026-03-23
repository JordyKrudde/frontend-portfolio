import React from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/posts'

function Blog() {
  const posts = getAllPosts()

  return (
    <section className="py-12 md:py-20 px-6 text-white md:mt-20 mt-12 min-h-screen">
      <div className="container mx-auto max-w-3xl">

        {/* Page header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-green-400 mb-4">BLOG</p>
          <h1 className="text-5xl md:text-6xl uppercase mb-6">Artikelen</h1>
          <p className="text-xl text-white/60 max-w-xl">
            Gedachten over frontend development, CSS, tooling en het vak.
          </p>
        </div>

        {/* Post list */}
        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map(post => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <article className="rounded-xl bg-neutral-900 border border-white/5 hover:border-green-400/25 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                      <time className="text-sm text-white/35">
                        {post.date.toLocaleDateString('nl-NL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="text-white/20 hidden sm:inline">·</span>
                      <span className="text-sm text-white/35">{post.readingTime} min leestijd</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl text-white group-hover:text-green-400 transition-colors duration-200 mb-2 leading-snug">
                      {post.title}
                    </h2>

                    {/* Description */}
                    {post.description && (
                      <p className="text-white/55 leading-relaxed mb-4">{post.description}</p>
                    )}

                    {/* Tags + arrow */}
                    <div className="flex items-center justify-between">
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
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
                      <span className="text-white/25 text-sm group-hover:text-green-400 group-hover:translate-x-1 transform transition-all duration-200 ml-auto">
                        →
                      </span>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white/30 text-center py-24">Nog geen artikelen gepubliceerd.</p>
        )}
      </div>
    </section>
  )
}

export default Blog
