import React from 'react';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Helmet} from "react-helmet";
import Navigation from "../components/nav"

class AboutPage extends React.Component{

render(){
  const siteTitle = this.props.data.site.siteMetadata.title
  const about = this.props.data.allContentfulAboutPage.edges
  const location = this.props.location
  var infoImage =''

  return (
    
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Helmet>
        <body id="rl-info-page" />
      </Helmet>
      <Navigation color={"#ffffff"} blendmode={"difference"} />

      <div className="rl-main-container" data-scroll-container>
      {about.map(({node}, index) => {

        const clients = node.clients
        const aboutText = node.childContentfulAboutPageAboutTextTextNode
        const awardsRecognitionEyebrow = (<span>Awards &<br />Recognition</span>)
        const contactInformation = (<span>Contact<br />Information</span>)
        const awardsRecognition = node.awardsRecognition
        infoImage = node.image.fluid.src
        return ( 
           
            <div className="rl-about-content rl-grid rl-contain" id="rl-scroll-container" key={index}>
                <div key={index} className="rl-info-container">
                    <p className="rl-about-text" key={aboutText.id}>{aboutText.aboutText}</p>
                    <div key={"container"+clients} className="rl-meta-info-container">
                        <div key={clients} className="rl-meta-info">
                            <h3 key={"eyebrow"+clients} className="rl-meta-eyebrow">Clients</h3>
                            <h3 key={"clients"+clients} className="rl-meta-content">{clients}</h3>
                        </div>
                        <div key={awardsRecognition} className="rl-meta-info">
                            <h3 key={"eyebrow"+awardsRecognition} className="rl-meta-eyebrow">{awardsRecognitionEyebrow}</h3>
                            <h3 key={"clients"+awardsRecognition} className="rl-meta-content">{awardsRecognition}</h3>
                        </div>
                        <div key={contactInformation} className="rl-meta-info">
                            <h3 key={"contact"+contactInformation} className="rl-meta-eyebrow">{contactInformation}</h3>
                            <div className="rl-meta-content">
                            <h3><a href="mailto: Hello@ryanlevitan.com">Hello@ryanlevitan.com</a></h3>
                            <h3><a href="https://www.linkedin.com/in/ryanlevitan">LinkedIn</a></h3>
                            <h3><a href="https://dribbble.com/ryan-levitan/about">Dribbble</a></h3>
                            </div>
                        </div>
                        <div className="rl-meta-info">
                            <h3 className="rl-meta-eyebrow">Developed By</h3>
                            <div className="rl-meta-content">
                                <h3><a href="https://dribbble.com/ryan-levitan/about">K-POP</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
           
              
            </div>
        )
      })}
      </div>
      <div className="scroll-container">
              <div id="rl-scroll-block">
                  <div className="rl-block-inner"></div>
              </div>
              <div id="rl-scroll-image">
                  <img className="rl-inner-image" src={infoImage} alt="" />
              </div>  
          </div>
    </Layout>

  )
}
}
export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulAboutPage {
        edges {
            node {
            childContentfulAboutPageAboutTextTextNode {
                aboutText
                id
            }
            clients
            awardsRecognition
            image {
                fluid{
                    src
                }
                id
              }
              id
            }
        }
        }
  }
`
