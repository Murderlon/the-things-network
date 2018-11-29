import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import fonts from '../styles/global/fonts'
import base from '../styles/global/base'
import typography from '../styles/global/typography'

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${base};
  ${typography};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media screen and (min-width: 60rem) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grid>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        {children}
      </Grid>
    )}
  />
)

export default Layout
