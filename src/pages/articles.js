import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"

const Blog = () => {
  return (
    <Layout activePage="articles">
      <SEO title="Articles" />
      <Heading>
        <span className="pr-2" role="img" aria-label="emoji icon">
          🎙️
        </span>
        Articles
      </Heading>
      <p className="-mt-3 mb-12 text-tertiary">
        Articles and thoughts published online.
      </p>
      <PostList />
      <Contact />
    </Layout>
  )
}

export default Blog
