import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
  const post = data.ghostPost

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="article"
      />
      <h1 className="content-title">{post.title}</h1>

      {/* The main post content */ }
      <section
        className="content-body load-external-scripts"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
