const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const config = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
* Here is the place where Gatsby creates the URLs for all the
* posts that we fetched from the Ghost site.
*/
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const createPosts = new Promise((resolve, reject) => {
        const postTemplate = path.resolve(`./src/templates/post.js`)
        const indexTemplate = path.resolve(`./src/templates/index.js`)
        resolve(
            graphql(`
                {
                    allGhostPost(
                        sort: {order: ASC, fields: published_at},
                        filter: {
                            slug: {ne: "data-schema"}
                        }
                    ) {
                        edges {
                            node {
                                slug
                            }
                        }
                    }
                }`
            ).then((result) => {
                if (result.errors) {
                    return reject(result.errors)
                }

                if (!result.data.allGhostPost) {
                    return resolve()
                }

                const items = result.data.allGhostPost.edges

                _.forEach(items, ({ node }) => {
                    // This part here defines, that our posts will use
                    // a `/:slug/` permalink.
                    node.url = `/${node.slug}/`

                    createPage({
                        path: node.url,
                        component: path.resolve(postTemplate),
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.slug,
                        },
                    })
                })

                // Pagination for posts, e.g., /, /page/2, /page/3
                paginate({
                    createPage,
                    items: items,
                    itemsPerPage: config.postsPerPage,
                    component: indexTemplate,
                    pathPrefix: ({ pageNumber }) => {
                        if (pageNumber === 0) {
                            return `/`
                        } else {
                            return `/page`
                        }
                    },
                })

                return resolve()
            })
        )
    })

    return Promise.all([createPosts])
}
