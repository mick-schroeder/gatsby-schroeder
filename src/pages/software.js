import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"
import ProjectGrid from "../components/projectGrid"

const Projects = () => {
  return (
    <Layout activePage="software">
      <SEO title="Software Portfolio" />
      <Heading>Software</Heading>
      <p className="-mt-3 mb-8 text-tertiary">
        Collection of open-source software published by Mick Schroeder, LLC.
      </p>
      <ProjectGrid />
      <Contact />
    </Layout>
  )
}

export default Projects
