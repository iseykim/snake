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

  // just remove tail and add to head on every iteration
  let key = `0-1`
  // this will work for single digit only

  // get new
  // y = +y + dy

  const setId = setInterval(() => {
    let [x, y] = [key[0], key[key.length - 1]]
    x = +x + dx
    key = `${x}-${y}`
    const c = document.getElementById(key)
    c.classList.add('active')
  }, 300)

  setTimeout(() => {
    clearInterval(setId)
  }, 900)
}

testBtn.addEventListener('click', event)

/* some sort of global state */
