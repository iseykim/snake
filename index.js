import init, {createSnake} from './init.js' 

export const ROWS = 10
export const SET = new Set()
export const TICK = 500
export const S = {
  x: 2,
  y: 0,
  dx: 1,
  dy: 0,
  ax: 0,
  ay: 0,
  KEY: null,
  snake: createSnake(),
}


// Initialize
init()
