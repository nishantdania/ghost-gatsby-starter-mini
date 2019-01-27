import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges

  return (
    <>
      <MetaData location={location} />
      <h1>Ghost Gatsby Starter Mini</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.node.id}>
           <Link to={post.node.slug}>
            {post.node.title}
           </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Index

// This page query loads all posts sorted descending by published date
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip,
        filter: { slug: {ne: "data-schema"}}
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
