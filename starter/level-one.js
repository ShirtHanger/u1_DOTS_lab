/*
 * DOTS: Level One
 *
 */

/* Scores and ball */

let score = 0

const ball = document.querySelector('.js-ball')

const scoreDisplay = document.querySelector('.js-score')

const levelWinner = document.querySelector('.level-winner')

const colors = ['silver', 'blue', 'tomato', 'lavender', 'forestgreen']

ball.addEventListener('click', () => {
    score += 10
    scoreDisplay.innerText = `SCORE: ${score} / 500` 
    if (score >= 500) {
        levelWinner.style.opacity = 1
        scoreDisplay.innerText = '🎉🎉'
    }
})