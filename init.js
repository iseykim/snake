import { ROWS } from "./index.js"
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
}
