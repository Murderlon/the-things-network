import React, { Component, Fragment } from 'react'
import Loadable from 'react-loadable'

import SecondaryNavigation from '../components/SecondaryNavigation/SecondaryNavigation'

const LoadingComponent = () => <h1>Loading bro...</h1>

const loadableOptions = {
  loading: LoadingComponent,
  delay: 500,
  timeout: 10000
}

const Map = Loadable({
  loader: () => import('../components/Map'),
  ...loadableOptions
})

class HowItWorks extends Component {
  render() {
    return (
      <Fragment>
        <SecondaryNavigation path="/*" aria-labelledby="secondary-navigation" />
        <Map path="/" />/
      </Fragment>
    )
  }
}

export default HowItWorks
