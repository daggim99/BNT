'use client'

import BlogHero from './Hero.Component'
import Section from '../about/Section.Component'
import Blog from './Blog.Components'

function BlogPage() {
  return (
    <>
      <BlogHero />
      <Section left={true} title={`Blog Title`} className={`mt-24`} />
      <Section left={false} title={`Blog Title`} className={`mt-36`} />
      <Section left={true} title={`Blog Title`} className={`mt-36 mb-24`} />
      <Blog />
    </>
  )
}

export default BlogPage
