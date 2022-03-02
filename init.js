import { ROWS, S, SET } from './index.js'
import { Snake, test } from './snake.js'

const board = document.getElementById('board')
const SNAKE_COORDINATES = ['0-0', '1-0', '2-0']

export function iSnake() {
  const snake = new Snake()
  SNAKE_COORDINATES.forEach(key => {
    snake.addHead(key)
    document.getElementById(key).classList.add('active')
    SET.add(key)
  })
  return snake
}

export default function init() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const row = document.createElement('div')
      row.setAttribute('id', `${i}-${j}`)
      board.appendChild(row)
    }
  }

  board.style.gridTemplateColumns = `repeat(${ROWS}, 50px)`


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
    }

    if (key === 't') test()
  }

  document.addEventListener('keydown', ({ key }) => setKeyDowns(key))
}
