let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let hoveredCell = null;
let xWins = 0;
let oWins = 0;
let draws = 0;

function placeMarker(index) {
    if (!gameBoard[index]) {
        gameBoard[index] = currentPlayer;
        const cell = document.getElementById('board').children[index];
        cell.innerText = currentPlayer;
        
        if (checkWinner(currentPlayer)) {
            if (currentPlayer === 'X') {
                xWins++;
            } else {
                oWins++;
            }
            updateScoreboard();
            resetGame();
            return;
        }
        
        if (checkDraw()) {
            draws++;
            updateScoreboard();
            resetGame();
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function updateButtonHover() {
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.addEventListener('mouseenter', function() {
            if (!cell.innerText) {
                cell.innerText = currentPlayer;
                hoveredCell = cell;
            }
        });
        cell.addEventListener('mouseleave', function() {
            if (hoveredCell === cell && !gameBoard[Array.from(cells).indexOf(cell)]) {
                cell.innerText = '';
                hoveredCell = null;
            }
        });
        cell.addEventListener('click', function() {
            placeMarker(Array.from(cells).indexOf(cell));
        });
    }
}

updateButtonHover();

function checkWinner(player) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] === player && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    return !gameBoard.includes('');
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
    
}

function updateScoreboard() {
    document.getElementById('x-wins').innerText = `Vitórias do X: ${xWins}`;
    document.getElementById('o-wins').innerText = `Vitórias do O: ${oWins}`;
    document.getElementById('draws').innerText = `Empates: ${draws}`;
}

function updateButtonEvents() {
    hoveredCell = null;
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.addEventListener('click', function() {
            placeMarker(parseInt(cell.id.split('-')[1]));
        });
    }
    updateScoreboard();
}

updateButtonHover();
updateButtonEvents();

function retornar() {
    window.location.href = "index.html"; 
}

