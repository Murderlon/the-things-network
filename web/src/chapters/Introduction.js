import React from 'react'

import Layout from '../components/Layout'
import LineChart from '../components/LineChart'
import ResponsiveChart from '../components/ResponsiveChart'

let Introduction = () => (
  <Layout.ParentGrid as="section">
    <Layout.SubGrid fullWidth>
      <h2 id="introduction">
        <span>0</span> Introduction
      </h2>
      <h3>
        Internet of Things is transforming the everyday physical objects that
        surround us into an ecosystem of information that will enrich our lives.{' '}
      </h3>
    </Layout.SubGrid>
    <Layout.SubGrid>
      <ResponsiveChart>
        {({ width, height }) => <LineChart width={width} height={height} />}
      </ResponsiveChart>
      <div className="context">
        <p>
          From refrigerators to parking spaces to houses, the{' '}
          <span className="highlight">
            Internet of Things is bringing more and more things into the digital
            fold every day
          </span>
          , which will likely make the Internet of Things a multi-trillion
          dollar industry in the near future.
        </p>
      </div>
    </Layout.SubGrid>
  </Layout.ParentGrid>
)

export default Introduction
