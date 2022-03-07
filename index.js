import init, { createSnake } from './init.js'

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
  tick: 200,
  rows: 10,
  start: false,
  score: 0
}

init()
