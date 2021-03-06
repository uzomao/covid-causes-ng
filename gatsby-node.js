/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions
    const causeTemplate = path.resolve(`./src/templates/cause.js`)

    const res = await graphql(`
        query {
            allContentfulCause {
                nodes {
                    slug
                    name
                }
            }
        }
    `)

    res.data.allContentfulCause.nodes.forEach(( {slug} ) => {
        createPage({
            component: causeTemplate,
            path: `/cause/${slug}`,
            context: {
                slug
            }
        })
    })
}