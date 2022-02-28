const board = document.getElementById('board')
const testBtn = document.getElementById('test-button')

/* State */
const ROWS = 8

/* Make Board */
for (let i = 0; i < ROWS; i++) {
  for (let j = 0; j < ROWS; j++) {
    const row = document.createElement('div')
    row.setAttribute('key', `${i}-${j}`)
    board.appendChild(row)
  }
}

/* CSS Grid */
board.style.gridTemplateColumns = `repeat(${ROWS}, 50px)`
