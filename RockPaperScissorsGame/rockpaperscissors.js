let wins = 0;
let losses = 0;
let draws = 0;

function myFunction(playerMove) {
    let randomNum = Math.random();
    let computerMove = ' ';
    let status = ' ';
     //Computer Move
    if(randomNum >= 0 && randomNum < 1/3) {
        computerMove = 'Rock';
    }
    else if(randomNum >= 1/3 && randomNum < 2/3) {
        computerMove = 'Paper';
    }
    else if(randomNum >= 2/3 && randomNum <= 1) {
        computerMove = 'Scissors';
    }
    //Compare with Player Move
    if(playerMove == 'Rock' && computerMove == 'Paper' || playerMove == 'Paper' && computerMove == 'Scissors' || playerMove == 'Scissors' && computerMove == 'Rock') {
        status = 'You lost!'
        losses++
    }
    else if(playerMove == 'Rock' && computerMove == 'Scissors' || playerMove == 'Paper' && computerMove == 'Rock' || playerMove == 'Scissors' && computerMove == 'Paper') {
        status = 'You won!' 
        wins++
    }
    else if(playerMove == 'Rock' && computerMove == 'Rock' || playerMove == 'Paper' && computerMove == 'Paper' || playerMove == 'Scissors' && computerMove == 'Scissors') {
        status = 'It\'s a tie!'
        draws++
    }
    //Display status
    document.getElementById('status').innerHTML = status;
    document.getElementById('scoreboard').innerHTML = `Wins: ${wins}, Draws: ${draws}, Losses: ${losses}`;
}
function resetScore() {
    wins = 0;
    losses = 0;
    draws = 0;
    document.getElementById('status').innerHTML = 'Score reset.';
    document.getElementById('scoreboard').innerHTML = `Wins: ${wins}, Draws: ${draws}, Losses: ${losses}`;
}

let autoplayActive = false;
let intervalId = null;

function autoplay() {
    if (autoplayActive) {
        clearInterval(intervalId);
        intervalId = null;
        autoplayActive = false;
        return;
    }

    const moves = ['Rock', 'Paper', 'Scissors'];

    intervalId = setInterval(function () {
        const randomIndex = Math.floor(Math.random() * moves.length);
        const playerMove = moves[randomIndex];
        myFunction(playerMove);
    }, 3000);

    autoplayActive = true;
}