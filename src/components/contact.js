import React from "react"
import { ExtLink, Button } from "./atoms"

export const Contact = () => {
  return (
    <div className="mt-32 full-width-container bg-secondary">
      <div className="container max-w-screen-xl mx-auto pt-16 text-gray-900">
        <h1 className="text-3xl font-semibold text-center text-primary">
          Get in touch{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className="px-4 mt-4 text-center text-secondary">
          Feel free to email me about anything. Want some advice? Give some
          feedback?
        </p>
        <p className="px-4 mt-1 text-center text-secondary">
          You can also reach me around the web:{" "}
          <ExtLink link="https://www.linkedin.com/in/schroedermick/" newTab>
            LinkedIn
          </ExtLink>
          ,{" "}
          <ExtLink link="https://github.com/mick-schroeder" newTab>
            GitHub
          </ExtLink>
          ,{" "}
          <ExtLink link="https://twitter.com/mick_schroeder" newTab>
            Twitter
          </ExtLink>
          ,{" "}
          <ExtLink link="https://www.instagram.com/mick_schroeder/" newTab>
            Instagram
          </ExtLink>
        </p>
        <div className="mx-auto  pt-10 flex justify-center">
          <Button width="widest" link="mailto:hey@mickschroeder.com">
            <span className=" text-2xl font-semibold text-on-accent">
              Say hello
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
