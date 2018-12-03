import React from 'react'
import styled from 'styled-components'

import variables from '../styles/variables'

let Div = styled.div`
  .range {
    color: ${variables.green};
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      width: 0.8em;
      height: 0.8em;
      border-radius: 50%;
      background: ${variables.green};
      margin-right: ${variables.spacing.small};
    }
  }

  h5 {
    font-family: ${variables.mainTypo};
    color: ${variables.highlightBlue};
    font-size: 1em;
    margin: 0;
    margin-top: ${variables.spacing.small};
  }
  ul {
    margin: 0;
  }
`

let ScrolledContext = ({ content, index }) => {
  return (
    <Div className="context scroll__text">
      <div className="step" data-step={index + 1}>
        <h4>{content.protocol}</h4>
        <p>{content.description}</p>
        <p className="range">
          <span /> {content.rangeAsText} meters range
        </p>
        <h5>Pros</h5>
        <ul>
          {content.pros.map(p => (
            <li>{p}</li>
          ))}
        </ul>
        <h5>Cons</h5>
        <ul>
          {content.cons.map(c => (
            <li>{c}</li>
          ))}
        </ul>
        <h5>Example use cases</h5>
        <ul>
          {content.useCases.map(u => (
            <li>{u}</li>
          ))}
        </ul>
      </div>
    </Div>
  )
}

export default ScrolledContext
