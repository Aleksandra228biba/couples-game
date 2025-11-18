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
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}

function createCard(value) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.value = value

  card.addEventListener('click', () => {
    if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards === 2) {
      return
    }

    card.textContent = value
    card.classList.add('flipped')
    flippedCards.push(card)

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      if (first.dataset.value === second.dataset.value) {
        first.classList.add('matched')
        second.classList.add('matched')
        flippedCards = []
        matchedCount++

        if (matchedCount === totalPairs) {
          setTimeout(() => {
            restartBtn.style.display = 'inline-block'
          }, 500)
        }
      }
      else {
        setTimeout(() => {
          first.classList.remove('flipped')
          second.classList.remove('flipped')
          first.textContent = ''
          second.textContent = ''
          flippedCards = []
        }, 500)
      }
    }
  })
  return card
}

function initGame() {
  gameBoard.innerHTML = ''
  restartBtn.style.display = 'none'
  flippedCards = []
  matchedCount = 0

  shuffle(cards)

  cards.forEach(value => {
    gameBoard.appendChild(createCard(value))
  })
}

restartBtn.addEventListener('click', initGame)

initGame()