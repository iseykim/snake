const board = document.getElementById('board')
const testBtn = document.getElementById('test-button')

/* State */
const ROWS = 8
const START = '0-0'
const SET = new Set()
let dx = 1
let dy = 1

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
  // whenever you add to set, color it
  SET.add(START)
  // target the START key and color it
  const curr = document.getElementById(START)
  curr.classList.add('active')

  // KEY CONST
  let KEY = `0-1`
  // y = +y + dy

  const setId = setInterval(() => {
    let [x, y] = [KEY[0], KEY[KEY.length - 1]]
    console.log(x, y)
    if (+x >= ROWS - 1) {
      clearInterval(setId)
      return // ! GAME OVER
    }

    x = +x + dx
    KEY = `${x}-${y}`
    const c = document.getElementById(KEY)
    c.classList.add('active')

    // Clear Interval
  }, 300)

  setTimeout(() => {
    clearInterval(setId)
  }, 8000)
}

testBtn.addEventListener('click', event)

/* some sort of global state */
