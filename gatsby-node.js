// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPost = path.resolve(`./src/templates/blog-post.js`)
//   return graphql(
//     `
      // {
      //   allMdx(
      //     sort: { fields: [frontmatter___date], order: DESC }
      //     limit: 1000
      //   ) {
      //     edges {
      //       node {
      //         fields {
      //           slug
      //         }
      //         frontmatter {
      //           title
      //         }
      //       }
      //     }
      //   }
      // }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allMdx.edges

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node

//       createPage({
//         path: `blog${post.node.fields.slug}`,
//         component: blogPost,
//         context: {
//           slug: post.node.fields.slug,
//           previous,
//           next,
//         },
//       })
//     })

//     return null
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }


// To add the slug to the data
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: `/${slug.slice(12)}`
//     })
//   }
// }

// // To create the posts pages
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { fields: [frontmatter___date], order: DESC }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//               description
//               main_class
//               title
//             }
//           }
//           next {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//             }
//           }
//           previous {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach(({ node, next, previous }) => {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/templates/blog-post.js`),
//         context: {
//           slug: node.fields.slug,
//           // the order is different here because of the DESC order
//           previous: next,
//           next: previous
//         }
//       })
//     })

//     // Create blog post list pages
//     const postsPerPage = 20
//     const numPages = Math.ceil(posts.length / postsPerPage)

//     Array.from({ length: numPages }).forEach((_, i) => {
//       createPage({
//         path: i === 0 ? `/` : `/page/${i + 1}`,
//         component: path.resolve('./src/templates/blog-list.js'),
//         context: {
//           limit: postsPerPage,
//           skip: i * postsPerPage,
//           numPages,
//           currentPage: i + 1
//         }
//       })
//     })
//   })
// }