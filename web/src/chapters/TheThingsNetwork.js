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

let Gateway = ({ x, y, name }) => (
  <g>
    <circle cx={x} cy={y} r="6" />
    <text x={x} y={y} dx={-14} dy={5}>
      {name}
    </text>
  </g>
)

let TheThingsNetwork = () => (
  <Layout.ParentGrid as="section">
    <ContentWrapper fullWidth>
      <h2>
        <span>2</span> The Things Network
      </h2>
      <ResponsiveChart>
        {dimensions => (
          <MapBaseGroup {...dimensions} extent={PoCLocations}>
            {generators => (
              <>
                <TileLayer {...dimensions} {...generators} />
                {PoCLocations.features.map(({ properties, geometry }) => {
                  let [x, y] = generators.projection(geometry.coordinates)

                  return (
                    <Gateway
                      key={properties.name}
                      x={x}
                      y={y}
                      name={properties.name}
                    />
                  )
                })}
              </>
            )}
          </MapBaseGroup>
        )}
      </ResponsiveChart>
    </ContentWrapper>
  </Layout.ParentGrid>
)

export default TheThingsNetwork
