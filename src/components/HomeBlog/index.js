import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BlogCard from "../BlogCard"

import { Container, Title, Cards } from "./styles"

function HomeBlog() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
  //       edges {
  //         node {
  //           excerpt
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             date(formatString: "DD/MM/YYYY")
  //             tags
  //             title
  //             description
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const posts = data.allMdx.edges

  return (
    <Container>
      <Title>Blog</Title>
      <Cards>
        {/* {posts.map(({ node }) => (
          <BlogCard
            key={node.frontmatter.title}
            blogTitle={node.frontmatter.title}
            blogDate={node.frontmatter.date}
            blogDescription={node.frontmatter.description}
          />
        ))} */}
      </Cards>
    </Container>
  )
}

export default HomeBlog
