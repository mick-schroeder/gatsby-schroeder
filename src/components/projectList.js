import React from "react"
import projects from "../data/projects"

const ProjectList = ({ showHeading }) => {
  return (
    <section className="">
      {showHeading && (
        <h2 className="mt-32 font-bold text-accent tracking-widestest uppercase">
          <span className="pr-2" role="img" aria-label="emoji icon">
            💡
          </span>
          Software Projects
        </h2>
      )}
      <ul className="mt-3 divide-y divide-subtle">
        {projects.map(project => {
          return (
            <li key={project.title} className="py-3">
              <a href={project.slug} target="_blank" rel="noopener noreferrer">
                <div className="-mx-5 -my-3 px-5 py-3 group flex justify-start sm:items-end space-x-3 sm:space-x-0 hover:bg-secondary">
                  <img
                    className="h-16 w-16 mx-5"
                    src={project.icon}
                    alt="Project icon"
                  ></img>
                  <div>
                    <h3 className="text-xl font-semibold text-primary group-hover:text-accent">
                      {project.title}
                    </h3>
                    <h4 className="font-medium text-tertiary">
                      {project.description}
                    </h4>
                  </div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectList
