import React, { PureComponent } from 'react'
import interpolatePath from 'd3-interpolate-path/src/interpolatePath'
import { animated, Spring } from 'react-spring'

export default class AnimatedPath extends PureComponent {
  state = { prevPath: '', nextPath: '' }

  componentDidMount() {
    this.setState({
      nextPath: this.props.path
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.setState({
        prevPath: prevProps.path,
        nextPath: this.props.path
      })
    }
  }

  render() {
    let { style, fill } = this.props
    let { prevPath, nextPath } = this.state
    let interpolator = interpolatePath(prevPath, nextPath)

    return (
      <Spring
        reset={prevPath !== nextPath}
        native
        from={{ t: 0 }}
        to={{ t: 1 }}
      >
        {({ t }) => (
          <animated.path
            style={style}
            d={t.interpolate(interpolator)}
            fill={fill}
          />
        )}
      </Spring>
    )
  }
}
