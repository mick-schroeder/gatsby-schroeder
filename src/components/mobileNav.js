import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./themeToggle"

const MobileNav = () => {
  const [navShow, setNavShow] = React.useState(false)

  React.useEffect(
    _ => {
      const body = document.body
      if (typeof body !== "undefined") {
        if (navShow) {
          body.style.setProperty("overflow", "hidden")
        } else {
          body.style.removeProperty("overflow")
        }
      }
    },
    [navShow]
  )

  return (
    <div className="sm:hidden text-xl" aria-hidden={!navShow}>
      <button
        type="button"
        className="md:hidden fixed right-0 px-5 py-12 z-50 focus:outline-none"
        onClick={e => {
          setNavShow(!navShow)
        }}
      >
        {navShow ? (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>
      {navShow && (
        <div className="relative z-10">
          <div className="w-full h-screen fixed bg-primary opacity-96"></div>
          <button
            type="button"
            className="w-full h-screen fixed cursor-auto"
            onClick={e => {
              setNavShow(!navShow)
            }}
          ></button>
          <nav className="w-screen h-screen mt-auto py-48 px-6 fixed flex flex-col items-center font-medium uppercase text-primary tracking-widest">
            <div className="flex-grow">
              <span className="pr-2" role="img" aria-label="emoji icon">
                🏠
              </span>
              <Link to="/">mickschroeder.com</Link>
            </div>

           {/*  <div className="flex-grow">
              <Link to="/about">
                <span className="pr-2" role="img" aria-label="emoji icon">
                  👨‍💻
                </span>
                About
              </Link>
            </div> */}
 
            <div className="flex-grow">
              <Link to="/software">
                <span className="pr-2" role="img" aria-label="emoji icon">
                  💡
                </span>
                Software
              </Link>
            </div>
            <div className="flex-grow">
            <Link to="/contact">
              <span className="pr-2" role="img" aria-label="emoji icon">
                🎙️
              </span>
              Contact
            </Link>
          </div>
            <div className="flex-grow">
              <a
                href="https://cite.mickschroeder.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pr-2" role="img" aria-label="emoji icon">
                  📝
                </span>
                Citation Generator
              </a>
            </div> 
            <div className="flex-grow">
              <a
                href="https://webshuffle.mickschroeder.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pr-2" role="img" aria-label="emoji icon">
                🔀
                </span>
                Web Shuffle
              </a>
            </div> 
              <ThemeToggle />
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNav
