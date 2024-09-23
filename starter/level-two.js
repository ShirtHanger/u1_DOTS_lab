/*
 * DOTS: Level Two
 *
 */

/* Scores and ball */

let score = 0

const balls = document.querySelectorAll('.js-ball')

const scoreDisplay = document.querySelector('.js-score')

const levelWinner = document.querySelector('.level-winner')

const colors = ['silver', 'blue', 'tomato', 'lavender', 'forestgreen']

for (ball of balls) {
    ball.addEventListener('click', () => {
        score += 10
        scoreDisplay.innerText = `SCORE: ${score} / 500` 
        if (score >= 500) {
            levelWinner.style.opacity = 1
            scoreDisplay.innerText = '🎉🎉'
        }
    })
}
