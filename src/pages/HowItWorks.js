import React, { Fragment } from 'react'
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

const HowItWorks = ({ step }) => {
  const steps = [
    { label: 'Device', link: 'device' },
    { label: 'Gateway', link: 'gateway' },
    { label: 'TTN', link: 'the-things-network' },
    { label: 'Application', link: 'application' }
  ]
  const currentStep = steps.find(({ link }) => link === step) || steps[0]

  return (
    <Fragment>
      <SecondaryNavigation
        path="/*"
        aria-labelledby="secondary-navigation"
        steps={steps}
        currentStep={currentStep}
      />
      <Map path="/*" currentStep={currentStep} />
    </Fragment>
  )
}

export default HowItWorks
