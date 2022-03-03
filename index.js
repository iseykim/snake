import init, { createSnake } from './init.js'

// export const ROWS = 10
// export const S.set = new Set()
// export const TICK = 500
export const S = {
  x: 2,
  y: 0,
  dx: 1,
  dy: 0,
  ax: 0,
  ay: 0,
  key: null,
  snake: createSnake(),
  set: new Set(),
  tick: 500,
  rows: 10
}

// Initialize
init()
