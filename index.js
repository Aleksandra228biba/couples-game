const values = [1, 2, 3, 4, 5, 6, 7, 8]
let cards = [...values, ...values]
let flippedCards = []
let matchedCount = 0
const totalPairs = values.length

const gameBoard = document.getElementById('game-board')
const restartBtn = document.getElementById('restart-btn')
// console.log(gameBoard, restartBtn)

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j] = array[j], array[i]]
  }
}

