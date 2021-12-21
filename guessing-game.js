function guessingGame(){
    this.guessCount = 0;
    this.answer = Math.floor(Math.random() * 100);
    this.game = false;
    return function guess(guessNumber){
        if(this.game === true) return "The game is over, you already won!";
        if(guessNumber === answer) {this.guessCount++; this.game = true; return `You win! You found ${answer} in ${this.guessCount} guesses.`;}
        if(guessNumber < answer) {this.guessCount++; return `${guessNumber} is too low!`;}
        if(guessNumber > answer) {this.guessCount++; return `${guessNumber} is too high!`;}
    }
}


let game = guessingGame();

module.exports = { guessingGame };
