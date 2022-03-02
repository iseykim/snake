import { ROWS, S, SET, TICK } from './index.js'
import { Snake, test } from './snake.js'
import { interval, createInitialApple } from './interval.js'

const board = document.getElementById('board')

export default function init() {
  // Create Board
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const row = document.createElement('div')
      row.setAttribute('id', `${i}-${j}`)
      board.appendChild(row)
    }
  }

  board.style.gridTemplateColumns = `repeat(${ROWS}, 50px)`

  document.addEventListener('keydown', ({ key }) => setKeyDowns(key))

  // Create an initial apple and update State
  createInitialApple()

  // Color Snake Body
  colorSnakeBody()
}

function colorSnakeBody() {
  SNAKE_COORDINATES.forEach(key => {
    document.getElementById(key).classList.add('active')
    SET.add(key)
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
    S.snake = createSnake()
    createInitialApple()
    colorSnakeBody()
  }

  if (key === 'i') window.tick = setInterval(interval, TICK)
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
  console.log('returned snake', s)
  return s
}

// S.snake = createSnake()
// export const snake = createSnake()
// SNAKE_COORDINATES.forEach(key => {
//   snake.addHead(key)
// })
