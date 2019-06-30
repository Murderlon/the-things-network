import { useState, useEffect } from 'react'

/**
 * useMedia returns a boolean representing a CSS media query.
 *
 * @param  {String} mediaQuery CSS media query string
 * @return {Boolean} Does the media query match?
 */
export default function useMedia(mediaQuery) {
  const initialMatches = window.matchMedia(mediaQuery).matches
  const [matches, setMatches] = useState(initialMatches)

  useEffect(() => {
    let active = true
    // Create a MediaQueryList (https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList)
    const mql = window.matchMedia(mediaQuery)

    // Create a listener that updates the state
    const onchange = () => {
      // Prevent updating an unmounted component
      if (!active) return
      // Set the state
      setMatches(mql.matches)
    }

    // Attach the listener to the MediaQueryList
    mql.addListener(onchange)

    return () => {
      active = false
      mql.removeListener(onchange)
    }
  }, [mediaQuery])

  return matches
}
