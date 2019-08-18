import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from 'component/Header'

import 'style/prism-tomorrow.scss'
import 'style/baseLayout.scss'

export class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navList: [
        {
          path: '/posts',
          name: 'post',
        },
        {
          path: '/articles',
          name: 'article',
        },
        {
          path: '/category',
          name: 'category',
        },
      ],
    }
  }

  render() {
    const { location, children } = this.props
    const { navList } = this.state

    return (
      <>
        {/* head custom 진행 */}
        <Helmet
          title="BaluPurohit23"
          meta={[
            { name: 'description', content: 'Balu Purohit Blog' },
            { name: 'keywords', content: 'balu, purohit, blog, profile' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        >
        </Helmet>

        {location.pathname !== '/' && (
          <Header location={location} navList={navList} />
        ) }

        <div className="blog-posts-container">{children}</div>
      </>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
}
export const pageQuery = graphql`
  query NavQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            path
          }
        }
      }
    }
  }