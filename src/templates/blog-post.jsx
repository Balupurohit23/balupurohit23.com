import React from "react"
import { Helmet } from "react-helmet"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import { classNames } from 'utils/commonUtil'
import SEO from 'components/seo'

import 'style/posts.scss'
import 'style/post.scss'
// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  let disqusConfig = {
    // url: `${config.siteUrl+location.pathname}`,
    // identifier: post.id,
    title: post.title,
  }
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title}`} >
      <SEO title={`${post.frontmatter.title}`} description={`${post.frontmatter.description}`} /> 
      </Helmet>
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="tagContainer">
        {post.frontmatter.tags}
      </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className={classNames('blog-sub-container, right')}>
        <p className="date">{post.frontmatter.date}</p>
        <p className="author">{`By ${post.frontmatter.author}`}</p>
              
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={''} />

      <Disqus shortname={"balupurohit23"} config={disqusConfig} />
    </>
      </div>

    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        tags
        author
      }
    }
  }
`
