import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Transition from "../components/transition"

const NotFoundPage = ({ data, location }) => {

  return (
    <>

      <SEO title="404: Not Found" />
      <div className="rl-main">
      <div className="error-container rl-contain">
        <div className="back-to-home">
          <Transition to={`/`} color={"#ffffff"} background={"#000000"}>
            <h3 className="nav-link logo">
              Back To Home
            </h3>
          </Transition>
        </div>
        <div className="rl-error rl-grid">
          <div className="rl-block-inner rl-col-1-6"></div>
          <div className="content-404 rl-col-6-13">
            <div className="rl-right-text">
                <h1>404</h1>
            </div>
            <div className="rl-bottom-text">
              <h1>Page</h1>
              <div className="rl-right-text">
                <h1>Not</h1>
                <h1>Found</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
