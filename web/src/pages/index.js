import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import TableOfContents from '../components/TableOfContents'
import LineChart from '../components/LineChart'
import ResponsiveChart from '../components/ResponsiveChart'

import modularScale from '../styles/modular-scale'
import vars from '../styles/variables'
import TheThingsNetwork from '../assets/ttn.svg'

const Header = styled.header`
  margin: ${vars.spacing.huge} 0;
  grid-column: 2 / 6;
  align-items: flex-end;

  h1 {
    font-size: 1em;
  }

  svg {
    display: inline-block;
    width: 100%;
    height: inherit;
  }

  @media screen and (min-width: 45rem) {
    grid-column: 2 / 12;
    display: grid;
    grid-template-columns: repeat(10, 1fr);

    h1 {
      grid-column: 1 / 7;
    }
    p {
      margin: 0;
      grid-column: 8 / 11;
      font-size: ${modularScale(2)};
    }
  }
`
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  .full-width {
    margin: 0 ${vars.spacing.medium};
    grid-column: 1 / 7;
  }

  .align-right {
    grid-column: 1 / 7;

    div {
      background: ${vars.backgroundBlue};
    }
    div:first-child {
      height: 100vw;
      background: ${vars.sectionBlue};
    }
  }

  @media screen and (min-width: 45rem) {
    grid-template-columns: repeat(12, 1fr);

    .full-width {
      margin: 0;
      grid-column: 2 / 12;
    }
    .align-right {
      grid-column: 2 / 13;
      display: grid;
      grid-template-columns: repeat(11, 1fr);

      div {
        grid-column: 7 / 13;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          width: 25vw;
        }
      }
      div:first-child {
        height: 50vw;
        grid-column: 1 / 7;
      }
    }
  }
`

class index extends Component {
  render () {
    return (
      <Layout>
        <Header>
          <h1>
            <TheThingsNetwork />
          </h1>
          <p>
            The story of a free and open Internet of Things network, powered by a new technology,
            and created by the people.
          </p>
        </Header>
        <TableOfContents />
        <Section>
          <div className="full-width">
            <h2 id="introduction">
              <span>0</span> Introduction
            </h2>
            <h3>
              Internet of Things is transforming the everyday physical objects that surround us into
              an ecosystem of information that will enrich our lives.{' '}
            </h3>
          </div>
          <div className="align-right ">
            <ResponsiveChart>
              {({ width, height }) => (
                <LineChart width={width} height={height} data={this.props.data.dataJson.years} />
              )}
            </ResponsiveChart>
            <div>
              <p>
                From refrigerators to parking spaces to houses, the{' '}
                <span className="highlight">
                  Internet of Things is bringing more and more things into the digital fold every
                  day
                </span>
                , which will likely make the Internet of Things a multi-trillion dollar industry in
                the near future.
              </p>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    dataJson {
      years {
        year
        value
      }
    }
  }
`

export default index
