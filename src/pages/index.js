import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default ({ data }) => {


  return (
    <Layout>
      <SEO title="home" />
      <div className="articles">
        {data.allWordpressPost.edges.map(({ node }) => (
          
          <div>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            {
              node.featured_media===null?<h5>No featured media</h5>:<Img fluid={node.featured_media.localFile.childImageSharp.fluid}/>
            }
            {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
  allWordpressPost(sort: {order: DESC, fields: [date]}) {
    edges {
      node {
        slug
        title
        excerpt
        featured_media {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}`