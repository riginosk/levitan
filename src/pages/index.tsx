// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Footer from "../components/footer"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {Helmet} from "react-helmet";
import Navigation from "../components/nav"
import Transition from "../components/transition"


type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allContentfulPost: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}






    export default function BlogIndex({data, location}: PageProps<Data>) {
      const siteTitle = data.site.siteMetadata.title
      location = location
      const posts = data.allContentfulPost.edges
 
  return (
    
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Helmet>
        <body className="home" />
      </Helmet>
      <Navigation color={"#000000"} blendmode={"difference"} />

      <div className="rl-main-container rl-home" data-scroll-container>
      <Hero />
      <h1 className="projects-title rl-contain">Selected Work</h1>
      <div className="projects-grid">
      {posts.map(({node}, index) => {
        const title = node.title || node.slug
        const year = node.year

        return ( 
          
          <article className={`project-item ${node.class}`} key={index}>
            <Transition to={`/${node.slug}`} color={node.textColor} background={node.backgroundColor}>
              <Img  fluid={node.image.fluid} />
              <header>
                <h2  className="year" >{year}</h2>
                <h2  className="project-title" >{title}</h2>
              </header>
            </Transition>


          </article>
        )
      })}
      </div>
      <Footer />
      </div>
    </Layout>

  )
}
    



export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(filter: {numbering: {}}, sort: {fields: numbering})  {
     edges {
       node {
         title
         subtitle
         year
         slug
         class
         backgroundColor
         textColor
         image {
           fluid {
            ...GatsbyContentfulFluid
           }
         }
       }
     }
   }
  }
`
