import React, { PureComponent } from 'react'
import { tile } from 'd3-tile'
import { animated } from 'react-spring'

// eslint-disable-next-line max-len
let baseUrl = `https://api.mapbox.com/styles/v1/murderlon/cjl6bvgn50mzl2rp2v8p3ut35/tiles/256`

let tileUrlBuilder = (url, z, x, y) =>
  `${url}/${z}/${x}/${y}@2x?access_token=${process.env.GATSBY_MAPBOX_TOKEN}`

let tau = 2 * Math.PI

class TileLayer extends PureComponent {
  tilesize = 256

  state = {
    layout: [],
    urls: []
  }

  calculateLayout = () => {
    let { projection, width, height } = this.props

    let layout = tile()
      .size([width, height])
      .scale(projection.scale() * tau)
      .translate(projection([0, 0]))()

    this.setState({ layout })
  }

  componentDidMount() {
    this.calculateLayout()
  }

  componentDidUpdate(prevProps) {
    let { width, height } = this.props
    if (width !== prevProps.width || height !== prevProps.height) {
      this.calculateLayout()
    }
  }

  render() {
    let { width, height } = this.props

    // Don't render if there is no width/height yet
    if (width === 0 || height === 0) return null

    let { layout } = this.state

    return layout.length ? (
      <animated.g transform={stringify(layout.scale, layout.translate)}>
        {layout.map(d => (
          <image
            shapeRendering="crispEdges"
            x={`${d.x * this.tilesize}`}
            y={`${d.y * this.tilesize}`}
            key={tileUrlBuilder(baseUrl, d.z, d.x, d.y)}
            width={this.tilesize + 1}
            height={this.tilesize + 1}
            xlinkHref={tileUrlBuilder(baseUrl, d.z, d.x, d.y)}
          />
        ))}
      </animated.g>
    ) : null
  }
}

function stringify(scale, translate) {
  let k = scale / 256
  let r = scale % 1 ? Number : Math.round

  return `translate(${r(translate[0] * scale)},${r(
    translate[1] * scale
  )}) scale(${k})`
}

export default TileLayer
