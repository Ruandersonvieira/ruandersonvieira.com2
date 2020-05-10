import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BlogCard from "components/BlogCard"

import { Container, Title, Cards } from "./styles"

function HomeBlog() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 3, sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            frontmatter {
              path
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              tags
              description
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges;

  return (
    <Container>
      <Title>Blog</Title>
      <Cards>
        {posts.map(({node: {frontmatter :{title,date,description }}}) => (
          <BlogCard
            key={title}
            blogTitle={title}
            blogDate={date}
            blogDescription={description}
          />
        ))}
      </Cards>
    </Container>
  )
}

export default HomeBlog
