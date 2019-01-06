import React from 'react'

import GlobalStyle from 'components/GlobalStyle'
import Layout from 'components/Layout'
import Link from 'components/Link'

export default () => (
  <>
    <GlobalStyle />
    <Layout.RootGrid>
      <Layout.ParentGrid>
        <Layout.SubGrid fullWidth>
          <p className="center">
            <Link to="/" iconLeft>
              back to home
            </Link>
          </p>
          <h2>This page doesn't exist!</h2>
        </Layout.SubGrid>
      </Layout.ParentGrid>
    </Layout.RootGrid>
  </>
)
