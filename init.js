import { S } from './index.js'
import { Snake, test } from './snake.js'
import { interval, createInitialApple } from './interval.js'

const resetS = {
  x: 2,
  y: 0,
  dx: 1,
  dy: 0,
  ax: 0,
  key: null,
  set: new Set()
}


export default function init() {
  const board = document.getElementById('board')
  const { rows } = S

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      const row = document.createElement('div')
      row.setAttribute('id', `${i}-${j}`)
      board.appendChild(row)
    }
  }

  board.style.gridTemplateColumns = `repeat(${rows}, 50px)`

  document.addEventListener('keydown', ({ key }) => setKeyDowns(key))

  createInitialApple()
  colorSnakeBody()
}

function colorSnakeBody() {
  SNAKE_COORDINATES.forEach(key => {
    document.getElementById(key).classList.add('active')
    S.set.add(key)
  })
}

/**
 * Key downs
 *
 * hjkl: directions
 * i: start
 * t: test Doubly Linked List in browser
 */
function setKeyDowns(key) {
  if (key === 'j') {
    S.dx = 1
    S.dy = 0
  }

  if (key === 'k') {
    S.dx = -1
    S.dy = 0
  }

  if (key === 'h') {
    S.dx = 0
    S.dy = -1
  }

  if (key === 'l') {
    S.dx = 0
    S.dy = 1
  }

  if (key === ' ') {
    clearInterval(window.tick)
    const grids = document.querySelectorAll('#board > div')
    grids.forEach(g => g.classList.remove('active'))
    const a = document.getElementById(`${S.ax}-${S.ay}`)
    a.classList.remove('apple')

    // reset state
    Object.keys(resetS).forEach((k) => S[k] = resetS[k])
    S.snake = createSnake()
    createInitialApple()
    colorSnakeBody()
  }

  if (key === 'i') window.tick = setInterval(interval, S.tick)
  if (key === 't') test()
}

/**
 * Initial Snake
 */
const SNAKE_COORDINATES = ['0-0', '1-0', '2-0']

export function createSnake() {
  const s = new Snake()
  SNAKE_COORDINATES.forEach(key => {
    s.addHead(key)
  })
  return s
}

// S.snake = createSnake()
// export const snake = createSnake()
// SNAKE_COORDINATES.forEach(key => {
//   snake.addHead(key)
// })
