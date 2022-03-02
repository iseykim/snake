import init, { iSnake } from './init.js'

// DEV: press i to start
document.addEventListener('keydown', ({ key }) => {
  if (key === 'i') window.tick = setInterval(interval, TICK)
})

/**
 * Global State
 */
export const ROWS = 20
export const S = {
  x: 2,
  y: 0,
  dx: 1,
  dy: 0,
  ax: 0,
  ay: 0
}
export const SET = new Set()
const TICK = 500
let KEY

/**
 * Initialize
 */
init()
const snake = iSnake()

function interval() {
  S.x = S.x + S.dx
  S.y = S.y + S.dy
  KEY = `${S.x}-${S.y}`
  console.log(`🟢  KEY `, KEY)

  // Check for out of bounds and collision
  if (S.x > ROWS - 1 || S.x < 0 || S.y > ROWS - 1 || S.y < 0 || SET.has(KEY)) {
    console.log('❤️')
    clearInterval(window.tick)
    return
  }

  // Check if apple
  SET.add(KEY)
  snake.addHead(KEY)
  const c = document.getElementById(KEY)
  c.classList.add('active')
  if (c.classList.contains('apple')) {
    createApple()
  } else {
    const tail = snake.popTail()
    const t = document.getElementById(tail)
    t.classList.remove('active')
    SET.delete(tail)
  }
}

// document.addEventListener('keydown', ({ key }) => {
//   if (key === 'j') {
//     dx = 1
//     dy = 0
//   }

//   if (key === 'k') {
//     dx = -1
//     dy = 0
//   }

//   if (key === 'h') {
//     dx = 0
//     dy = -1
//   }

//   if (key === 'l') {
//     dx = 0
//     dy = 1
//   }

//   if (key === ' ') {
//     clearInterval(window.tick)
//     const grids = document.querySelectorAll('#board > div')
//     grids.forEach(g => g.classList.remove('active'))
//   }
// })

function createApple() {
  const oldApple = document.getElementById(`${S.ax}-${S.ay}`)
  oldApple.classList.remove('apple')

  let x, y
  do {
    x = Math.floor(Math.random() * ROWS)
    y = Math.floor(Math.random() * ROWS)
  } while (SET.has(`${x}-${y}`))

  S.ax = x
  S.ay = y
  const d = document.getElementById(`${x}-${y}`)
  d.classList.add('apple')
}
