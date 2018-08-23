const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader')
const rewireStyledComponents = require('react-app-rewire-styled-components')
const rewirePolished = require('react-app-rewire-polished')
const { compose } = require('react-app-rewired')

module.exports = function(config, env) {
  const rewires = compose(
    // Adds the React SVG Loader
    rewireSvgReactLoader,
    // Compile polished helper functions at build time
    rewirePolished,
    // This plugin adds support for server-side rendering,
    // for minification of styles and gives you a nicer debugging experience.
    rewireStyledComponents
  )
  return rewires(config, env)
}
