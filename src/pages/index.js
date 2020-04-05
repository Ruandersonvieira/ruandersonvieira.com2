import React from "react"

import Layout from "../components/Layout"
import HomeProfile from "../components/HomeProfile"
import HomePortfolio from "../components/HomePortfolio"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
    <HomeProfile />
    <HomePortfolio />
  </Layout>
)

export default IndexPage
