import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/nav"
import Transition from "../components/transition"

const BlogPostContentfulTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata.title
  const { previous } = pageContext

  let containers = ''
  let backgroundColor =''
  let textColor =''
  let spanTitle = ''

  if (post.backgroundColor !== null) {
    backgroundColor = post.backgroundColor
  } else {
    backgroundColor = "#ffffff"
  }

  if (post.textColor !== null) {
    textColor = post.textColor

  } else {
    textColor = "#000000"
  }

  if (post.container !== null) {

  containers =
  data.contentfulPost.container
  .map(projectEntry => {
  if (projectEntry.__typename === 'ContentfulImageLeftBlock') {
    if (projectEntry.rightAlign === true){
      return (
        <div key={projectEntry.id} className ="rl-contain rl-module-spacer">
          <div className= "rl-image-left-block rl-grid">
            <div className='block block-right'></div>
            <Img className="rl-image-right" key={projectEntry.image.id} fluid={projectEntry.image.fluid} />
          </div>
        </div>
      )
    } else if (projectEntry.rightAlign === false || projectEntry.rightAlign === null ){
      return (
        <div key={projectEntry.id} className ="rl-contain rl-module-spacer">
          <div className= "rl-image-left-block rl-grid">
            <Img className="rl-image-left" key={projectEntry.image.id} fluid={projectEntry.image.fluid} />
            <div className='block block-left'></div>
          </div>
        </div>
      )
    }
  } else if (projectEntry.__typename === 'ContentfulProjectDetails') {
    return (
      <div key={projectEntry.id} className ="rl-contain rl-module-spacer">
      <div className= "rl-project-details rl-grid">
        <div className='rl-project-info'>
          <h3 className='rl-eyebrow'>Project Info</h3>
          <h3>{projectEntry.childContentfulProjectDetailsProjectInfoTextNode.projectInfo}</h3>
        </div>
        <div className='rl-project-credits'>
          <h3 className='rl-eyebrow'>Credits</h3>
          <h3>{projectEntry.credits}</h3>
        </div>
      </div>
    </div>
    )
  } else if (projectEntry.__typename === 'ContentfulFullWidthImage') {
    if (projectEntry.imageFull.fluid !== null && projectEntry.vimeo === null ) {
      return (
        <div key={projectEntry.id} className ="rl-contain rl-module-spacer">
        <div className= "rl-full-width-image">
          <Img className="rl-full-width" key={projectEntry.imageFull.id} fluid={projectEntry.imageFull.fluid} />
        </div>
      </div>
      )
    } else if ((projectEntry.imageFull.fluid === null || projectEntry.imageFull.fluid) !== null && projectEntry.vimeo !== null){
      return (
        <div key={projectEntry.id} className ="rl-contain rl-module-spacer">
        <div className= "rl-full-width-image">
          <div className='embed-container'>
            <iframe title={projectEntry.id} src={projectEntry.vimeo + '?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'} frameBorder="0" webkitallowfullscreen="" mozallowFullScreen="" allowFullScreen="" data-ready="true"></iframe>
          </div>
        </div>
      </div>
      )
    }
  } else if (projectEntry.__typename === 'ContentfulTwoImages') {
    if (projectEntry.rightAlign === true){
      return (
        <div key={projectEntry.id} className ="rl-contain rl-module-spacer">
          <div className= "rl-two-images rl-grid">
            <Img className="rl-col-1-9" key={projectEntry.image2.id} fluid={projectEntry.image2.fluid} />
            <Img className="rl-col-9-13" key={projectEntry.image1.id} fluid={projectEntry.image1.fluid} />
          </div>
        </div>
      )
    } else if (projectEntry.rightAlign === false || projectEntry.rightAlign === null ){
      return (
        <div key={projectEntry.id} className ="rl-contain rl-module-spacer">
          <div className= "rl-two-images rl-grid">
            <Img className="rl-col-1-9" key={projectEntry.image1.id} fluid={projectEntry.image1.fluid} />
            <Img className="rl-col-9-13" key={projectEntry.image2.id} fluid={projectEntry.image2.fluid} />
          </div>
        </div>
      )   
    }
  }
  return (
    <></>
  )
})
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.subtitle || post.excerpt}
      />
      <Navigation color={textColor} blendmode={"normal"}/>

      <div className="rl-main-container" data-scroll-container>
        <article style={{backgroundColor: backgroundColor, color:textColor }} className="project-detail">
          <header>
            <div className="hero-container rl-contain">
              <div className="rl-right-text">
                <h1 className="rl-project-year">{post.year}</h1>
                <div style={{backgroundColor: textColor}} className="dash"></div>
              </div>
              <div className="rl-project-title">
                <h1>{post.title}</h1>
              </div>
            </div>
          </header>
          <div className="project-content">
            {containers}
          </div>
        </article>

        <div className="rl-transporter">
          {previous && (
              <>
              {(() => {
              if (previous.title !== null){
              var str = `${previous.title}`;
              function wrapWords(str, tmpl) {
                return str.replace(/\S+\s*/g, tmpl || "<div>$&</div><br>");
              }
              spanTitle = wrapWords(str);
              }
            })()}
            
              <Transition to={`/${previous.slug}`} color={"#ffffff"} background={"#000000"}>
              <div className="hero-container rl-contain">
                    <h1>Next</h1>
                    <div className="rl-arrow">
                      <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M87.9756 0C87.9756 28.225 111.287 51.2109 139.628 51.2109V62.7891C111.287 62.7891 87.9756 85.775 87.9756 114H76.3975C76.3975 92.8127 87.0426 74.1114 103.203 62.7462H0V51.2578H103.209C87.0451 39.893 76.3975 21.1898 76.3975 0H87.9756Z" fill="white"/>
                      </svg>
                    </div>
                <div className="rl-grid rl-next-project-container">
                  <img className="rl-next-project-image" src={previous.image.fluid.src} alt={previous.title} />

                  <div className="rl-next-project">
                    <div className="rl-right-text">
                      <h1>{previous.year}</h1>
                    </div>
                    <h1 className="rl-next-project-title">
                    <div className="rl-span-title" dangerouslySetInnerHTML={{__html: spanTitle}}></div>
                    </h1>
                  </div>
                </div>

              </div>
              </Transition>
              </>
          )}
        </div>
      </div>

    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost( slug: {eq: $slug }) {
      title
      subtitle
      year
      backgroundColor
      textColor
      image {
        fluid {
         ...GatsbyContentfulFluid
        }
      }
      container {
          ... on ContentfulImageLeftBlock {
            internal {
              type
            }
            rightAlign
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
              id
            }
            id
          }
          ... on ContentfulProjectDetails {
            id
            childContentfulProjectDetailsProjectInfoTextNode {
              projectInfo
            }
            credits
          }
          ... on ContentfulFullWidthImage {
            id
            vimeo
            imageFull {
              fluid {
                ...GatsbyContentfulFluid
              }
              id
            }
          }
        ... on ContentfulTwoImages {
          id
          rightAlign
          image1 {
            fluid {
              ...GatsbyContentfulFluid
            }
            id
          }
          image2 {
            fluid {
              ...GatsbyContentfulFluid
            }
            id
          }
        }
      }
    }
  }
`

