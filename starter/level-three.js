/*
 * DOTS: Level Three
 *
 */

let score = 0

const balls = document.querySelectorAll('.js-ball')

const scoreDisplay = document.querySelector('.js-score')

const levelWinner = document.querySelector('.level-winner')

const colors = ['silver', 'blue', 'tomato', 'lavender', 'forestgreen', '#111']

// const switchColor = (colors) => () => {
//     randomColor = Math.floor(Math.random() * colors.length);
//     ball.style.backgroundColor = colors[randomColor]
// }



for (ball of balls) {
    const numberOfPoints = parseInt(ball.dataset.increment)
    ball.addEventListener('click', () => {
        score += numberOfPoints
        scoreDisplay.innerText = `SCORE: ${score} / 500`
        if (score % 3 === 0) {
            switchColor(colors)
            console.log('LOLOLOL')
        } 
        if (score >= 500) {
            levelWinner.style.opacity = 1
            scoreDisplay.innerText = '🎉A WINNER IS YOU🎉'
        }
    })
}

function switchColor(colors) {
    randomColor = Math.floor(Math.random() * colors.length) // Copied this from my Pokemon Album Prework, edited for this
    document.body.style.backgroundColor = colors[randomColor]
    randomColor = Math.floor(Math.random() * colors.length)
    for (ball of balls) {
        ball.style.backgroundColor = colors[randomColor]
    }
}