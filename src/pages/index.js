import React from "react"
import { Blob, HeroButton } from "../components/atoms"
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
        <h2 className="lg:mt-0 max-w-3xl text-3xl text-opacity-90 sm:text-4xl text-secondary font-extrabold sm:text-left  lg:text-left">
          <span class="text-2xl sm:text-3xl text-opacity-75	font-normal">
            <br className="mb-6" />
            Pharmacist & Indie Software Developer in New Jersey.
          </span>
        </h2>

      </div>
     <div className="relative">
       {/* <Blob />*/}  
         <div className="absolute w-full h-full top-0 flex items-center justify-center">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden">
            <Image />
          </div>
        </div> 
      </div>
    </div>
    <ProjectList showHeading />
{/*     <PostList showHeading />
 */}    <Contact />
  </Layout>
)

export default IndexPage
