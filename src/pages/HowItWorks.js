import React from 'react'
import Loadable from 'react-loadable'

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

const HowItWorks = () => <Map path="/" />

export default HowItWorks
