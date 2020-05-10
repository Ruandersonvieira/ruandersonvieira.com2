import React from "react"

import Layout from "components/Layout"
import HomeProfile from "components/Home/Profile"
import HomePortfolio from "components/Home/Portfolio"
import HomeBlog from "components/Home/Blog"

const IndexPage = () => (
  <Layout>
    <HomeProfile />
    <HomePortfolio />
    <HomeBlog />
  </Layout>
)

export default IndexPage
