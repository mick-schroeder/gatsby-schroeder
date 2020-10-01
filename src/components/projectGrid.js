import React from "react"
import projects from "../data/projects"
import { ProjectLink } from "./atoms"

const ProjectGrid = ({ showHeading }) => {
  return (
    <section className="">
      {showHeading && (
        <h2 className="mt-32 font-bold text-accent tracking-widestest uppercase">
          Projects
        </h2>
      )}
      <ul className="mt-3 -mx-5 grid md:grid-cols-2 gap-6 md:gap-6">
        {projects.map(project => {
          return (
            <li
              key={project.title}
              className="py-5 px-6 relative group md:bg-secondary hover:bg-secondary"
            >
              <div className="flex justify-between space-x-3 sm:space-x-0 pb-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent">
                    <a
                      href={project.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <h4 className="font-base text-tertiary pr-3">
                    {project.description}
                  </h4>
                  <div className="flex items-center justify-start space-x-4 absolute bottom-0 mb-5">
                    {project.links.map(link => {
                      return (
                        <ProjectLink
                          key={link.url}
                          label={link.label}
                          url={link.url}
                        />
                      )
                    })}
                  </div>
                </div>
                <img className="h-16 w-16 mx-auto"src={project.icon} alt="Project icon"></img>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectGrid
