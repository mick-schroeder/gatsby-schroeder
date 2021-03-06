import React from "react"
import { Blob,HeroButton } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import ProjectList from "../components/projectList"
import Contact from "../components/contact"
import Image from "../components/image"

const IndexPage = () => (
  <Layout activePage="/">
    <SEO />
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
    <div>
      <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-extrabold sm:text-left md:text-center lg:text-left">
        Hi, I’m Mick Schroeder, PharmD.{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
        <br className="mb-6" />
        <span class="text-2xl sm:text-3xl text-accent font-normal">
          Health Informatics Pharmacist in Brooklyn, NY.
        </span>
      </h1>
      <div className="mx-auto  pt-10 flex justify-center">
          <HeroButton width="widest" link="about" title="More info about me">
            <span className=" text-xl font-semibold text-on-accent">
              More about me...
            </span>
          </HeroButton>
        </div>
      </div>
      <div className="relative">
        <Blob />
        <div className="absolute w-full h-full top-0 flex items-center justify-center">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden">
            <Image />
          </div>
        </div>
      </div>
    </div>
    <ProjectList showHeading />
    <PostList showHeading />
    <Contact />
  </Layout>
)

export default IndexPage
