import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocomotiveScroll from 'locomotive-scroll';

class ScrollBoi extends React.Component {
  componentDidMount () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
  }

  render () {
    return (
        <div data-scroll-container>
             <SEO title="All posts" />
      <Bio />
      <div className="projects-grid">
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const year = node.year

        return (
          <article data-scroll data-scroll-speed="2" className={node.class} key={node.slug}>
            <Link to={node.slug}>

            <Img fluid={node.image.fluid} />

            <header>
            <h2 className="year" >{year}</h2>
            <h2>{title}</h2>
            </header>
            </Link>
          </article>
        )
      })}
      </div>
        </div>
    )
  }
}

export default ScrollBoi