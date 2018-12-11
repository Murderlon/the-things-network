import React, { Component } from 'react'
import styled from 'styled-components'
import scrollama from 'scrollama'
import { StaticQuery, graphql } from 'gatsby'
import { geoCircle } from 'd3-geo'
import { select, selectAll } from 'd3-selection'
import interpolatePath from 'd3-interpolate-path/src/interpolatePath'
import { animated, Spring, Trail } from 'react-spring'

import Layout from '../components/Layout'
import ResponsiveChart from '../components/ResponsiveChart'
import MapBaseGroup from '../components/MapBaseGroup'
import TileLayer from '../components/TileLayer'
import OrthographicWorld from '../components/OrthographicWorld'

import variables from '../styles/variables'
import modularScale from '../styles/modular-scale'

let ContentWrapper = styled(Layout.ParentGrid)`
  /* background: ${variables.secondaryBlue}; */

  > div {
    position: relative;
  }

  .mapGraphic {
    position: sticky;
    z-index: 0;
    height: 70vh;
  }

  .mapScrollText {
    position: relative;
  }

  .step {
    z-index: 1;
    p {
      margin: 0 auto;
      max-width: 30em;
      background: ${variables.secondaryBlue};
      padding: ${variables.spacing.medium};
      font-size: ${modularScale(1)}
    }
  }
`

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
    let graphicMarginTop = Math.floor(graphicHeight / 3)

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
          let { currentStep } = this.state
          let { features } = data.poCJson
          let circumference = 6371000 * Math.PI * 2
          let angle = (2500 / circumference) * 360

          return (
            <ContentWrapper as="section" id="mapScroll">
              <Layout.SubGrid fullWidth>
                <h2>
                  <span>2</span> The Things Network
                </h2>
                <Spring
                  delay={1000}
                  from={{ opacity: currentStep < 3 ? 0 : 1 }}
                  to={{ opacity: currentStep < 3 ? 1 : 0 }}
                >
                  {props => (
                    <ResponsiveChart classProp="mapGraphic" style={props}>
                      {dimensions => (
                        <MapBaseGroup {...dimensions} extent={data.poCJson}>
                          {generators => (
                            <>
                              <TileLayer {...dimensions} {...generators} />
                              <Trail
                                items={features}
                                keys={({ properties }) => properties.name}
                                native
                                from={{
                                  t: currentStep > 0 && currentStep < 3 ? 0 : 1
                                }}
                                to={{
                                  t: currentStep > 0 && currentStep < 3 ? 1 : 0
                                }}
                              >
                                {item => ({ t }) => {
                                  let [x, y] = generators.projection(
                                    item.geometry.coordinates
                                  )
                                  let radius = geoCircle()
                                    .center(item.geometry.coordinates)
                                    .radius(angle)

                                  let inactive = geoCircle()
                                    .center(item.geometry.coordinates)
                                    .radius(0)

                                  let interpolator = interpolatePath(
                                    generators.path(inactive()),
                                    generators.path(radius())
                                  )

                                  return (
                                    <g>
                                      <animated.path
                                        d={t.interpolate(interpolator)}
                                        fill={variables.green}
                                        fillOpacity={0.3}
                                      />
                                      <circle
                                        cx={x}
                                        cy={y}
                                        r="6"
                                        fill={variables.green}
                                      />
                                    </g>
                                  )
                                }}
                              </Trail>
                              )}
                            </>
                          )}
                        </MapBaseGroup>
                      )}
                    </ResponsiveChart>
                  )}
                </Spring>
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
                  <div className="step" data-step={3}>
                    <Spring
                      delay={1500}
                      immediate={currentStep < 3}
                      from={
                        currentStep < 3
                          ? { opacity: 1, transform: 'scale(1)' }
                          : { opacity: 0, transform: 'scale(1.1)' }
                      }
                      to={
                        currentStep < 3
                          ? { opacity: 0, transform: 'scale(1.1)' }
                          : { opacity: 1, transform: 'scale(1)' }
                      }
                    >
                      {props => <OrthographicWorld style={props} />}
                    </Spring>
                  </div>
                </div>
              </Layout.SubGrid>
            </ContentWrapper>
          )
        }}
      />
    )
  }
}
