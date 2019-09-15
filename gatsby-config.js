/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')
const siteUrl = process.env.URL || process.env.DEPLOY_URL || `https://www.balupurohit23.com`

module.exports = {
  /* MetaData of my site */
  siteMetadata: {
    title: `BaluPurohit23`,
    author: `Balu Purohit`,
    description: `Personal Blog of Balu Purohit`,
    siteUrl,
    social: {
      twitter: `balupurohit23`,
    },
  },

  /* Gatsby plugins */
  plugins: [
  	{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BaluPurohit23`,
        short_name: `balupurohit23`,
        description: `Personal website of Balu Purohit.`,
        lang: 'en',
		  icons: [
		    {
		      src: `/icons/android-chrome-192x192.png`,
		      sizes: `192x192`,
		      type: `image/png`,
		    },
		    {
		      src: `/icons/android-chrome-512x512.png`,
		      sizes: `512x512`,
		      type: `image/png`,
		    },
		  ], // Add or remove icon sizes as desired
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },

    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-catch-links`,


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        layout: path.join(__dirname, 'src/layout'),
        style: path.join(__dirname, 'src/style'),
        utils: path.join(__dirname, 'src/utils')
      }
    },

    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [],
      },
    },

    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `balupurohit23`
      }
    },
  ],

}