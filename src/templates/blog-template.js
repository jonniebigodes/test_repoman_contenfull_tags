import React from "react"
import {graphql, Link} from "gatsby"
import Img from 'gatsby-image';
const blogTemplate = ({data}) => {
  const {contentfulBlogPost}= data
  const { title, body, tags,featuredImage} = contentfulBlogPost 
  
  return (
    <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        border:`1px solid rebeccapurple`
      }}>
      
      <div style={{marginTop:'8px'}}>
        <Img fluid={featuredImage.fluid}/>
      </div>
      <h1>{title}</h1>
      <div>
        <ul>
          {tags !== null ? (
            tags.map(item => <li key={`tag_item_${item}`}>{item}</li>)
          ) : (
            <li>no tags</li>
          )}
        </ul>
      </div>
      <div>
        <h4>Blog contents:</h4>
        <div dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}}/>
      </div>
      <Link to={'/myblogposts/'}>View more blogposts</Link>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export const pageQuery = graphql`
  query contentfulBlogEntry($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
      featuredImage{
        fluid(maxWidth:2000){
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default blogTemplate
