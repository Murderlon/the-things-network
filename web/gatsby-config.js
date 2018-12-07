let path = require('path')

module.exports = {
  siteMetadata: {
    title: 'The Things Network'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src/data')
      }
    },
    `gatsby-transformer-json`
  ]
}
