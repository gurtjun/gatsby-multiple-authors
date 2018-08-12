import React from "react"
import Layout from "../components/layout";

export default ({data}) => {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug}}) {
      html
      frontmatter {
        title
        authors {
          name
        }
      }
    }
  }  
`