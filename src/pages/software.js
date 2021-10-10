import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"
import ProjectGrid from "../components/projectGrid"

const Projects = () => {
  return (
    <Layout activePage="software">
      <SEO title="Software Projects" />
      <Heading>Software Projects</Heading>
      <p className="-mt-3 mb-8 text-tertiary">
        Collection of open-source software projects.
      </p>
      <ProjectGrid />
      <Contact />
    </Layout>
  )
}

export default Projects
