/* eslint-disable max-len */
import React from 'react'
import { Helmet } from 'react-helmet'

export default () => (
  <Helmet>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Things Network</title>
    <meta
      name="description"
      content="Storytelling experience for The Things Network"
    />
    <meta
      name="keywords"
      content="ttn, the-things-network, lora, lorawan, storytelling, data-visualisation, graduation-project"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="The Things Network" />
    <meta
      property="og:description"
      content="Storytelling experience for The Things Network"
    />
    <meta property="og:image" content="/og-image.png" />
    <meta property="og:site_name" content="The Things Network" />
    <meta property="og:url" content="https://ttn.cleverfranke.com" />

    <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Intl.~locale.en,Array.prototype.find,Array.prototype.findIndex,Array.prototype.includes,IntersectionObserver,Object.values,Number.parseFloat" />
  </Helmet>
)
