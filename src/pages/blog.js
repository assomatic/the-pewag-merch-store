import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
  return (
    <Layout pageTitle='Blog Posts'>
      <ul>
        {data.allFile.nodes.map((node) => {
          return (
            <li key={node.id}>
              <h6>{node.name}</h6>
            </li>
          )
        })}
      </ul>
      <p>my Blog Posts go there</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
        id
      }
    }
  }
`

export default Blog
