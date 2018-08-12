import React from "react"
import Layout from "../components/layout";

export default ({data}) => {
  const {authorYaml, allMarkdownRemark} = data
  return (
    <Layout>
      <h1>{authorYaml.name}</h1>
      <p>Posts:</p>
      {allMarkdownRemark.edges.forEach(({node}) => (
        <h2>{node.frontmatter.title}</h2>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $id: String!) {
    authorYaml(fields: { slug: { eq: $slug}}) {
      name
    }
    
    allMarkdownRemark(filter: {frontmatter: {authors: {in: [$id]}}}) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`