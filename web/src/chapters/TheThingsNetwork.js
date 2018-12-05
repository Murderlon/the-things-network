import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import ResponsiveChart from '../components/ResponsiveChart'
import MapBaseGroup from '../components/MapBaseGroup'
import TileLayer from '../components/TileLayer'

import PoCLocations from '../data/proof-of-concept.json'

let ContentWrapper = styled(Layout.SubGrid)`
  > div {
    height: 80vh;
  }
`

let TheThingsNetwork = () => (
  <Layout.ParentGrid as="section">
    <ContentWrapper fullWidth>
      <h2>
        <span>2</span> The Things Network
      </h2>
      <ResponsiveChart>
        {dimensions => (
          <MapBaseGroup {...dimensions} extent={PoCLocations}>
            {generators => <TileLayer {...dimensions} {...generators} />}
          </MapBaseGroup>
        )}
      </ResponsiveChart>
    </ContentWrapper>
  </Layout.ParentGrid>
)

export default TheThingsNetwork
