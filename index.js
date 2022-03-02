import init from './init.js'
import { Snake, test } from './snake.js'

export const ROWS = 8
const SNAKE_COORDINATES = ['0-0', '1-0', '2-0']
const SET = new Set()
const TICK = 500
let dx = 1
let dy = 0
let x = 2 // ! add x, y to be dependent on snake head
let y = 0

// Initialize snake
const snake = new Snake()
SNAKE_COORDINATES.forEach(key => {
  snake.addHead(key)
})
// test()

init()

document.addEventListener('keydown', ({ key }) => {
  if (key === 'i') event()
})

function event() {
  SNAKE_COORDINATES.forEach(c => {
    SET.add(c)
    document.getElementById(c).classList.add('active')
  })

  let KEY = snake.head.key

  window.tick = setInterval(() => {
    console.log(`TICK => x: ${x}, y: ${y}`)

    if (x > ROWS - 1 || x < 0 || y > ROWS - 1 || y < 0) {
      console.log('Game Over!')
      clearInterval(window.tick)
      return
    }

    KEY = `${x}-${y}`
    SET.add(KEY)
    snake.addHead(KEY)
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

  if (key === ' ') {
    clearInterval(window.tick)
    const grids = document.querySelectorAll('#board > div')
    grids.forEach(g => g.classList.remove('active'))
  }
})
