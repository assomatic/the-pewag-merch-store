import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='I am master chainsaw!'
        src='../images/pexels-karolina-grabowska-4206123.jpg'
      ></StaticImage>
    </Layout>
  )
}

export default IndexPage
