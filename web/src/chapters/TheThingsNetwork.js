import React, { Component } from 'react'
import styled from 'styled-components'
import scrollama from 'scrollama'
import { StaticQuery, graphql } from 'gatsby'
import { geoCircle } from 'd3-geo'
import { select, selectAll } from 'd3-selection'

import Layout from '../components/Layout'
import ResponsiveChart from '../components/ResponsiveChart'
import MapBaseGroup from '../components/MapBaseGroup'
import TileLayer from '../components/TileLayer'
import AnimatedPath from '../components/AnimatedPath'

import variables from '../styles/variables'

let ContentWrapper = styled(Layout.SubGrid)`
  position: relative;

  .mapGraphic {
    position: sticky;
    z-index: 0;
    min-height: 60vw;
  }
  .mapScrollText {
    position: relative;
    z-index: 1;
  }

  .step {
    p {
      margin: 0 auto;
      max-width: 30em;
      background: ${variables.secondaryBlue};
      padding: ${variables.spacing.medium};
    }
  }
`
let Gateway = ({ x, y, name, path }) => (
  <g>
    <circle cx={x} cy={y} r="6" fill={variables.green} />
    <AnimatedPath
      path={path}
      fill={variables.green}
      style={{ fillOpacity: 0.3 }}
    />
  </g>
)
export default class TheThingsNetwork extends Component {
  state = {
    currentStep: 0
  }

  componentDidMount() {
    this.container = select('#mapScroll')
    this.graphic = this.container.select('.mapGraphic')
    this.text = this.container.select('.mapScrollText')
    this.step = this.text.selectAll('.step')

    this.setupStickyfill()
    this.scroller = scrollama()
    this.handleResize()

    this.scroller
      .setup({
        container: '#mapScroll',
        graphic: '.mapGraphic',
        text: '.mapScrollText',
        step: '.mapScrollText .step',
        offset: 0.7
      })
      .onStepEnter(this.handleStepEnter)
    // setup resize event
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    this.scroller.destroy()
  }

  handleResize = () => {
    let stepHeight = Math.floor(window.innerHeight)
    let graphicHeight = Math.floor(window.innerHeight / 2)
    let graphicMarginTop = Math.floor(graphicHeight / 2)

    this.step.style('height', stepHeight + 'px')
    this.graphic.style('top', graphicMarginTop + 'px')
    this.scroller.resize()
  }

  handleStepEnter = ({ index }) => {
    this.setState({ currentStep: index })
    this.step.classed('is-active', (d, i) => i === index)
  }

  setupStickyfill = () => {
    let Stickyfill = require('stickyfilljs')
    selectAll('.sticky').each(function() {
      Stickyfill.add(this)
    })
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            poCJson {
              type
              features {
                type
                properties {
                  id
                  name
                }
                geometry {
                  type
                  coordinates
                }
              }
            }
          }
        `}
        render={data => {
          let { features } = data.poCJson
          let circumference = 6371000 * Math.PI * 2
          let angle = (2500 / circumference) * 360

          return (
            <Layout.ParentGrid as="section" id="mapScroll">
              <ContentWrapper fullWidth>
                <h2>
                  <span>2</span> The Things Network
                </h2>
                <ResponsiveChart classProp="mapGraphic">
                  {dimensions => (
                    <MapBaseGroup {...dimensions} extent={data.poCJson}>
                      {generators => (
                        <>
                          <TileLayer {...dimensions} {...generators} />
                          {features.map(({ properties, geometry }) => {
                            let [x, y] = generators.projection(
                              geometry.coordinates
                            )
                            let circle = geoCircle()
                              .center(geometry.coordinates)
                              .radius(this.state.currentStep > 0 ? angle : '')

                            return (
                              <Gateway
                                key={properties.name}
                                x={x}
                                y={y}
                                name={properties.name}
                                path={generators.path(circle())}
                              />
                            )
                          })}
                        </>
                      )}
                    </MapBaseGroup>
                  )}
                </ResponsiveChart>
                <div className="mapScrollText">
                  <div className="step" data-step={0}>
                    <p>
                      Imagine an Internet of Things network build around LoRaWAN
                      that is{' '}
                      <span className="highlight">
                        created by the people, free, and open for everyone to
                        use.
                      </span>
                    </p>
                  </div>
                  <div className="step" data-step={1}>
                    <p>
                      In 2015, as a proof of concept the city of{' '}
                      <span className="highlight">
                        Amsterdam was fully covered in just four weeks.
                      </span>{' '}
                      However, the gateways were expensive and not that easy to
                      use.
                    </p>
                  </div>
                  <div className="step" data-step={2}>
                    <p>
                      The Things Network community then went on a{' '}
                      <span className="highlight">mission to crowdsource </span>{' '}
                      a global open and independent Internet Of Things network —{' '}
                      <span className="highlight">and they did.</span>
                    </p>
                  </div>
                </div>
              </ContentWrapper>
            </Layout.ParentGrid>
          )
        }}
      />
    )
  }
}
