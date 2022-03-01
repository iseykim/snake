/* DOM */
const board = document.getElementById('board')
const testBtn = document.getElementById('test-button')
const resetBtn = document.getElementById('reset-button')

/* Global State */
const ROWS = 8
const START = '0-0'
const SET = new Set()
const TICK = 300
let dx = 1
let dy = 0
let game = false

/* Make Board */
for (let i = 0; i < ROWS; i++) {
  for (let j = 0; j < ROWS; j++) {
    const row = document.createElement('div')
    row.setAttribute('id', `${i}-${j}`)
    board.appendChild(row)
  }
}

/* CSS Grid */
board.style.gridTemplateColumns = `repeat(${ROWS}, 50px)`

/* Module */
import Body from './snake.js'

/**
 * On each iteration:
 *
 * tail -> x -> x -> head
 *
 * get head, add the dir
 */

function event() {
  // const snake = new Body(START)
  SET.add(START)
  const curr = document.getElementById(START)
  curr.classList.add('active')

  let KEY = START
  // y = +y + dy

  window.tick = setInterval(() => {
    let [x, y] = [KEY[0], KEY[KEY.length - 1]]
    console.log(x, y)
    if (+x >= ROWS - 1) {
      clearInterval(window.tick)
      return // ! GAME OVER
    }

    x = +x + dx
    y = +y + dy
    KEY = `${x}-${y}`
    const c = document.getElementById(KEY)
    c.classList.add('active')

  }, TICK)

  setTimeout(() => {
    clearInterval(window.tick)
  }, 8000)
}

testBtn.addEventListener('click', event)
resetBtn.addEventListener('click', reset)

function reset() {
  clearInterval(window.tick)
  game = false
  const grids = document.querySelectorAll('#board > div')
  grids.forEach(g => g.classList.remove('active'))
}

// Keyboard Events: move to init
document.addEventListener('keydown', ({ key, code }) => {
  // console.log('key:', key, 'code', code)
  if (key === 'j') {
    dx = 1
    dy = 0
  }

  if (key === 'k') {
    dx = -1
    dy = 0
  }

  if (key === 'h') {
    dx = 0
    dy = -1
  }

  if (key === 'l') {
    dx = 0
    dy = 1
  }

  if ((key = ' ')) {
    // if false, start game
    if (!game) {
      game = !game
    } else {
      reset()
    }
  }
})
