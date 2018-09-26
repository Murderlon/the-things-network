export const Line = ({ from, to }) => [
  {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [from, to]
    }
  },
  {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [from, to]
    }
  }
]
