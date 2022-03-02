import { S, ROWS, SET } from './index.js'
// import { snake } from './init.js'
// const snake = S.snake

export function createApple() {
  const appl = document.getElementById(`${S.ax}-${S.ay}`)
  appl.classList.remove('apple')

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

export function createInitialApple() {
  let x = Math.floor(Math.random() * (ROWS - 1) + 1)
  let y = Math.floor(Math.random() * (ROWS - 1) + 1)
  S.ax = x
  S.ay = y
  const n = document.getElementById(`${x}-${y}`)
  n.classList.add('apple')
}

export function interval() {
  S.x = S.x + S.dx
  S.y = S.y + S.dy
  S.KEY = `${S.x}-${S.y}`
  console.log(`🟢  S.KEY `, S.KEY)

  // Out of bounds & collision
  if (
    S.x > ROWS - 1 ||
    S.x < 0 ||
    S.y > ROWS - 1 ||
    S.y < 0 ||
    SET.has(S.KEY)
  ) {
    console.log('GAME OVER')
    clearInterval(window.tick)
    return
  }

  // Move Forwards
  SET.add(S.KEY)
  S.snake.addHead(S.KEY)
  const c = document.getElementById(S.KEY)
  c.classList.add('active')

  // Apple Logic
  if (c.classList.contains('apple')) {
    createApple()
  } else {
    const tail = S.snake.popTail()
    const t = document.getElementById(tail)
    t.classList.remove('active')
    SET.delete(tail)
  }
}
