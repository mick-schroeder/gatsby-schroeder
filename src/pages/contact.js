import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import { Heading } from "../components/atoms"

const ContactPage = _ => {
  return (
    <Layout activePage="contact">
      <SEO title="Contact" />
      <div className="container">
        <Heading>
          <span className="pr-2" role="img" aria-label="emoji icon">
            👨‍💻
          </span>
          How to Contact
        </Heading>

        <p className="mt-3 mb-12 text-tertiary">
        See below for the best ways to get in contact. Email usually works best.

        </p>
        <Contact />
      </div>
 
    </Layout>
  )
}

export default ContactPage
