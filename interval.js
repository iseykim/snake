import { S } from './index.js'

export function createApple() {
  const appl = document.getElementById(`${S.ax}-${S.ay}`)
  appl.classList.remove('apple')

  let x, y
  do {
    x = Math.floor(Math.random() * S.rows)
    y = Math.floor(Math.random() * S.rows)
  } while (S.set.has(`${x}-${y}`))

  S.ax = x
  S.ay = y
  const d = document.getElementById(`${x}-${y}`)
  d.classList.add('apple')
}

export function createInitialApple() {
  let x = Math.floor(Math.random() * (S.rows - 1) + 1)
  let y = Math.floor(Math.random() * (S.rows - 1) + 1)
  S.ax = x
  S.ay = y
  const n = document.getElementById(`${x}-${y}`)
  n.classList.add('apple')
}

export function interval() {
  S.x = S.x + S.dx
  S.y = S.y + S.dy
  S.key = `${S.x}-${S.y}`
  console.log(`🟢  S.key `, S.key)

  // out of bounds & collision
  if (
    S.x > S.rows - 1 ||
    S.x < 0 ||
    S.y > S.rows - 1 ||
    S.y < 0 ||
    S.set.has(S.key)
  ) {
    console.log('GAME OVER')
    clearInterval(window.tick)
    return
  }

  // move forwards
  S.set.add(S.key)
  S.snake.addHead(S.key)
  const c = document.getElementById(S.key)
  c.classList.add('active')

  // apple logic
  if (c.classList.contains('apple')) {
    createApple()
  } else {
    const tail = S.snake.popTail()
    const t = document.getElementById(tail)
    t.classList.remove('active')
    S.set.delete(tail)
  }
}
