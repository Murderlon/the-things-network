import styled from 'styled-components'
import { animated } from 'react-spring'

import variables from 'styles/variables'

export let Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  z-index: 1;
  pointer-events: ${({ currentStep }) =>
    currentStep < 3 ? 'none' : 'initial'};
`

export let LogoWrapper = styled(animated.div)`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 30%;
  max-width: 12rem;
  height: 30%;
  max-height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  opacity: 0;

  svg {
    width: 100%;
  }

  p {
    font-family: ${variables.monoTypo};
    text-align: center;
    margin-bottom: 0;

    span {
      background: ${variables.secondaryBlue};
      padding: 3px 0;
    }
  }
`

export let Canvas = styled.canvas`
  display: inline-block;
  margin: 0 auto;
  cursor: move;
  position: relative;
`
