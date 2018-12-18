let path = require('path')

module.exports = {
  siteMetadata: {
    title: 'The Things Network'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        chapters: path.join(__dirname, 'src/chapters'),
        components: path.join(__dirname, 'src/components'),
        data: path.join(__dirname, 'src/data'),
        helpers: path.join(__dirname, 'src/helpers'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src/data')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src/chapters')
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg'
  ]
}
