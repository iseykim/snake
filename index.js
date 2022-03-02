import init from './init.js'
import { Snake, Node } from './snake.js'

/**
 * index.js will hold global state
 * Tick logic
 */
export const ROWS = 4
const START = '1-1'
const SET = new Set()
const TICK = 500
let dx = 1
let dy = 0
let x = 1
let y = 1

const snake = new Snake(new Node(START))

init()

document.addEventListener('keydown', ({ key }) => {
  // temporary
  if (key === 'i') event()
})

function event() {
  SET.add(START)
  // const curr = document.getElementById(START)
  // curr.classList.add('active')

  let KEY = START

  window.tick = setInterval(() => {
    console.log(`TICK => x: ${x}, y: ${y}`)
    
    // add to head

    if (x > ROWS - 1 || x < 0 || y > ROWS - 1 || y < 0) {
      console.log('Game Over!')
      clearInterval(window.tick)
      return // ! GAME OVER
    }

    KEY = `${x}-${y}`
    SET.add(KEY)
    snake.addHead(new Node(KEY))
    console.log(SET)
    console.log(snake) 

    const c = document.getElementById(KEY)
    c.classList.add('active')

    x = x + dx
    y = y + dy
  }, TICK)
}

document.addEventListener('keydown', ({ key }) => {
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

  // clears board
  if (key === ' ') {
    clearInterval(window.tick)
    const grids = document.querySelectorAll('#board > div')
    grids.forEach(g => g.classList.remove('active'))
  }
})
