import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Link to='/blog/'>Back to Blog</Link>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

export default BlogPost
