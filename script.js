let player = 0; clown = 0;

function main() {
    const selectedbtn = document.querySelectorAll('.options button');
    const playerdisp = document.getElementById('player');
    selectedbtn.forEach((option) => {
        option.addEventListener('click', (event) => {
            console.log(event.target.id + " is selected");
            playerdisp.setAttribute('src', `images/${event.target.id}-front-player.png`);
            clown_choice = opponent();
            if (event.target.id == clown_choice) {
                console.log('its a draw');
                return 0;
            } else if (isPlayerWinner(event.target.id, clown_choice)) {
                console.log('player wins');
                player += 1;
                updatePoints();
            } else {
                console.log('clown won');
                clown += 1;
                updatePoints();
            }
        })
    });
}

function checkWinner() {
    if (player == 5) {
        alert('player won');
        player = 0;
        clown = 0;
        updatePoints();
    } else if (clown == 5) {
        alert('clown won');
        player = 0;
        clown = 0;
        updatePoints();
    }
}

function updatePoints() {
    const points = document.querySelector('.points');
    console.log(`${points} is selected`);
    points.textContent = `${player} - ${clown}`;
    checkWinner();
}


function opponent() {
    game = ['Rock', 'Paper', 'Scissors'];
    cpu = game[Math.floor(Math.random()*game.length)];
    const clowndisp = document.getElementById('clown');
    clowndisp.setAttribute('src', `images/${cpu}-front.png`);
    console.log(`CPU selected ${cpu}`);
    return cpu;
}

function isPlayerWinner(player, opponent) {
    if (player == 'Rock') {
        if (opponent == 'Paper') {
            return false;
        } else {
            return true;
        }
    } else if (player == 'Paper') {
        if (opponent == 'Scissors') {
            return false;
        } else {
            return true;
        }
    } else if (player == 'Scissors') {
        if (opponent == 'Rock') {
            return false;
        } else {
            return true;
        }
    }
}

main();