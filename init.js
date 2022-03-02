// import { ROWS } from './index.js'
export const state = {
  ROWS: 10,
  dx: 1,
  dy: 0,
  x: 2,
  y: 0,
}

let { ROWS, dx, dy, x, y } = state

const board = document.getElementById('board')

export default function init() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const row = document.createElement('div')
      row.setAttribute('id', `${i}-${j}`)
      board.appendChild(row)
    }
  }

  board.style.gridTemplateColumns = `repeat(${ROWS}, 50px)`

  // ? Deal with import export logic
  // ? Can I update state from here?
  function setKeyDowns(key, dx, dy) {
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
  }

  document.addEventListener('keydown', ({ key }) => setKeyDowns(key, dx, dy))
}
