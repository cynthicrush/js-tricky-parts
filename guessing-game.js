function guessingGame() {
    const answer = Math.floor(Math.random() * 100)
    let guessCount = 0
    let over = false
    return function guess(guess) {
        if(over) return `The game is over, you already won!`
        guessCount ++
        if(guess > answer) {
            return `${guess} is too high!`;
        } else if(guess < answer) {
            return `${guess} is too low!`;
        } else {
            over = true
            const word = guessCount === 1 ? 'guess' : 'guesses';
            return `You win! You found ${guess} in ${guessCount} ${word}.`
        }
    }
}

module.exports = { guessingGame };
