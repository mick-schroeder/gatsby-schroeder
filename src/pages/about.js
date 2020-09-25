import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink, InlinePageLink } from "../components/atoms"
import SkillGrid from "../components/skillGrid"
import skills from "../data/skills"
import Contact from "../components/contact"

const About = _ => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>About Me</h2>
          <p>
            I'm Mick Schroeder, I work full-time as a game programmer at{" "}
            <ExtLink link="https://.com/">Secret 6, Inc</ExtLink>.
          </p>
          </article>

          <div className="mt-12 flex flex-col space-y-0">
        {skills.map(data => {
          return (
            <SkillGrid
              key={data.label}
              heading={data.label}
              description={data.description}
              categories={data.categories}
            />
          )
        })}
      </div>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
