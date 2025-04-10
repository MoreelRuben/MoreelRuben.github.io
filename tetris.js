const canvas = document.getElementById('tetris');
const context  = canvas.getContext('2d');
context.scale(30, 30);

const ROWS = 18;
const COLUMNS = 10;

const letterMap = {
    '5,4,1': { letter: 'R', color: '#FF6B6B'},
    '10,2,1': { letter: 'U', color: '#FF6B6B'},
    '12,7,1': { letter: 'B', color: '#FF6B6B'},
    '9,3,1': { letter: 'E', color: '#FF6B6B'},
    '2,4,1': { letter: 'N', color: '#FF6B6B'},
    '6,4,1': { letter: 'R', color: '#FF6B6B'},
    '12,2,1': { letter: 'U', color: '#FF6B6B'},
    '12,9,1': { letter: 'N', color: '#FF6B6B'},
    '17,3,1': { letter: 'E', color: '#FF6B6B'},
    '13,2,1': { letter: 'J', color: '#FFD93D'},
    '17,9,1': { letter: 'U', color: '#FFD93D'},
    '16,1,1': { letter: 'L', color: '#FFD93D'},
    '3,2,1': { letter: 'E', color: '#FFD93D'},
    '6,9,1': { letter: 'S', color: '#FFD93D'},
    '7,6,1': { letter: 'R', color: '#FFD93D'},
    '8,1,1': { letter: 'E', color: '#FFD93D'},
    '4,5,1': { letter: 'I', color: '#FFD93D'},
    '1,1,1': { letter: 'N', color: '#FFD93D'},
    '13,8,1': { letter: 'T', color: '#6BCB77'},
    '16,2,1': { letter: 'I', color: '#6BCB77'},
    '15,7,1': { letter: 'E', color: '#6BCB77'},
    '7,10,1': { letter: 'S', color: '#6BCB77'},
    ////////////////////////////////////////////////
    '5,4,2': { letter: 'L', color: '#FF6B6B'},
    '10,2,2': { letter: 'U', color: '#FF6B6B'},
    '12,7,2': { letter: 'C', color: '#FF6B6B'},
    '9,3,2': { letter: 'A', color: '#FF6B6B'},
    '2,4,2': { letter: 'S', color: '#FF6B6B'},
    '6,4,2': { letter: 'V', color: '#FF6B6B'},
    '12,2,2': { letter: 'I', color: '#FF6B6B'},
    '12,9,2': { letter: 'C', color: '#FF6B6B'},
    '17,3,2': { letter: 'T', color: '#FF6B6B'},
    '9,9,2': { letter: 'O', color: '#FF6B6B'},
    '8,8,2': { letter: 'R', color: '#FF6B6B'},
    '13,2,2': { letter: 'C', color: '#FFD93D'},
    '17,9,2': { letter: 'I', color: '#FFD93D'},
    '16,1,2': { letter: 'A', color: '#FFD93D'},
    '3,2,2': { letter: 'R', color: '#FFD93D'},
    '6,9,2': { letter: 'A', color: '#FFD93D'},
    '13,8,2': { letter: 'J', color: '#6BCB77'},
    '16,2,2': { letter: 'E', color: '#6BCB77'},
    '15,7,2': { letter: 'F', color: '#6BCB77'},
    '7,10,2': { letter: 'G', color: '#6BCB77'},
    '12,8,2': { letter: 'I', color: '#6BCB77'},
    '4,9,2': { letter: 'L', color: '#6BCB77'},
    ////////////////////////////////////////////////
    '5,4,3': { letter: 'J', color: '#FF6B6B'},
    '10,2,3': { letter: 'U', color: '#FF6B6B'},
    '12,7,3': { letter: 'L', color: '#FF6B6B'},
    '9,3,3': { letter: 'I', color: '#FF6B6B'},
    '2,4,3': { letter: 'E', color: '#FF6B6B'},
    '6,4,3': { letter: 'T', color: '#FF6B6B'},
    '12,2,3': { letter: 'T', color: '#FF6B6B'},
    '12,9,3': { letter: 'E', color: '#FF6B6B'},
    '13,2,3': { letter: 'A', color: '#FFD93D'},
    '17,9,3': { letter: 'L', color: '#FFD93D'},
    '16,1,3': { letter: 'I', color: '#FFD93D'},
    '3,2,3': { letter: 'C', color: '#FFD93D'},
    '6,9,3': { letter: 'E', color: '#FFD93D'},
    '19,2,3': { letter: 'M', color: '#FFD93D'},
    '4,9,3': { letter: 'A', color: '#FFD93D'},
    '16,7,3': { letter: 'U', color: '#FFD93D'},
    '3,8,3': { letter: 'R', color: '#FFD93D'},
    '1,4,3': { letter: 'E', color: '#FFD93D'},
    '13,8,3': { letter: 'E', color: '#6BCB77'},
    '16,2,3': { letter: 'L', color: '#6BCB77'},
    '15,7,3': { letter: 'I', color: '#6BCB77'},
    '7,10,3': { letter: 'N', color: '#6BCB77'},
    '12,8,3': { letter: 'A', color: '#6BCB77'},
    '14,2,3': { letter: 'L', color: '#6BCB77'},
    '12,7,3': { letter: 'E', color: '#6BCB77'},
    '8,8,3': { letter: 'N', color: '#6BCB77'},
    '5,5,3': { letter: 'E', color: '#6BCB77'},
    ////////////////////////////////////////////////
    '5,4,4': { letter: 'M', color: '#FF6B6B'},
    '10,2,4': { letter: 'I', color: '#FF6B6B'},
    '12,7,4': { letter: 'L', color: '#FF6B6B'},
    '9,3,4': { letter: 'L', color: '#FF6B6B'},
    '2,4,4': { letter: 'I', color: '#FF6B6B'},
    '6,4,4': { letter: 'E', color: '#FF6B6B'},
    '12,2,4': { letter: 'F', color: '#FF6B6B'},
    '12,9,4': { letter: 'I', color: '#FF6B6B'},
    '17,3,4': { letter: 'N', color: '#FF6B6B'},
    '14,3,4': { letter: 'N', color: '#FF6B6B'},
    '13,2,4': { letter: 'O', color: '#FFD93D'},
    '17,9,4': { letter: 'L', color: '#FFD93D'},
    '16,1,4': { letter: 'I', color: '#FFD93D'},
    '3,2,4': { letter: 'V', color: '#FFD93D'},
    '6,9,4': { letter: 'I', color: '#FFD93D'},
    '7,6,4': { letter: 'A', color: '#FFD93D'},
    '8,1,4': { letter: 'E', color: '#FFD93D'},
    '4,5,4': { letter: 'M', color: '#FFD93D'},
    '1,1,4': { letter: 'M', color: '#FFD93D'},
    '1,8,4': { letter: 'A', color: '#FFD93D'},
    '13,8,4': { letter: 'I', color: '#6BCB77'},
    '16,2,4': { letter: 'B', color: '#6BCB77'},
    '15,7,4': { letter: 'E', color: '#6BCB77'},
    '7,10,4': { letter: 'N', color: '#6BCB77'},
    //////////////////////////////////////////////
    '5,4,5': { letter: 'L', color: '#FF6B6B'},
    '10,2,5': { letter: 'O', color: '#FF6B6B'},
    '12,7,5': { letter: 'B', color: '#FF6B6B'},
    '9,3,5': { letter: 'K', color: '#FF6B6B'},
    '2,4,5': { letter: 'E', color: '#FF6B6B'},
    '13,2,5': { letter: 'J', color: '#FFD93D'},
    '17,9,5': { letter: 'A', color: '#FFD93D'},
    '16,1,5': { letter: 'C', color: '#FFD93D'},
    '3,2,5': { letter: 'K', color: '#FFD93D'},
    '6,9,5': { letter: 'M', color: '#6BCB77'},
    '19,2,5': { letter: 'A', color: '#6BCB77'},
    '4,9,5': { letter: 'R', color: '#6BCB77'},
    '16,7,5': { letter: 'I', color: '#6BCB77'},
    '3,8,5': { letter: 'E', color: '#6BCB77'},
    '1,4,5': { letter: 'K', color: '#FFD93D'},
    '10,4,5': { letter: 'E', color: '#FFD93D'},
    '13,8,5': { letter: 'R', color: '#6BCB77'},
    '16,2,5': { letter: 'E', color: '#6BCB77'},
    '15,7,5': { letter: 'N', color: '#6BCB77'},
    '7,10,5': { letter: 'S', color: '#6BCB77'},
    '12,8,5': { letter: 'K', color: '#6BCB77'},
    '14,2,5': { letter: 'E', color: '#6BCB77'},
    '12,7,5': { letter: 'A', color: '#6BCB77'},
    '8,8,5': { letter: 'N', color: '#6BCB77'},
    '5,5,5': { letter: 'T', color: '#6BCB77'},
    '17,7,5': { letter: 'O', color: '#6BCB77'},
    '9,9,5': { letter: 'I', color: '#6BCB77'},
    '6,10,5': { letter: 'N', color: '#6BCB77'},
    '10,11,5': { letter: 'E', color: '#6BCB77'},
    ////////////////////////////////////////////////
    '5,4,6': { letter: 'A', color: '#FF6B6B'},
    '10,2,6': { letter: 'L', color: '#FF6B6B'},
    '12,7,6': { letter: 'Y', color: '#FF6B6B'},
    '9,3,6': { letter: 'C', color: '#FF6B6B'},
    '2,4,6': { letter: 'I', color: '#FF6B6B'},
    '6,4,6': { letter: 'A', color: '#FF6B6B'},
    '12,2,6': { letter: 'C', color: '#FF6B6B'},
    '12,9,6': { letter: 'O', color: '#FF6B6B'},
    '17,3,6': { letter: 'R', color: '#FF6B6B'},
    '8,4,6': { letter: 'N', color: '#FF6B6B'},
    '10,2,6': { letter: 'E', color: '#FF6B6B'},
    '10,9,6': { letter: 'E', color: '#FF6B6B'},
    '16,3,6': { letter: 'L', color: '#FF6B6B'},
    '13,2,6': { letter: 'J', color: '#FFD93D'},
    '17,9,6': { letter: 'O', color: '#FFD93D'},
    '16,1,6': { letter: 'S', color: '#FFD93D'},
    '3,2,6': { letter: 'E', color: '#FFD93D'},
    '6,9,6': { letter: 'P', color: '#FFD93D'},
    '7,6,6': { letter: 'H', color: '#FFD93D'},
    '8,1,6': { letter: 'I', color: '#FFD93D'},
    '4,5,6': { letter: 'N', color: '#FFD93D'},
    '1,1,6': { letter: 'E', color: '#FFD93D'},
    '11,11,6': { letter: 'M', color: '#FFD93D'},
    '14,5,6': { letter: 'A', color: '#FFD93D'},
    '1,6,6': { letter: 'X', color: '#FFD93D'},
    '13,8,6': { letter: 'J', color: '#6BCB77'},
    '16,2,6': { letter: 'O', color: '#6BCB77'},
    '15,7,6': { letter: 'S', color: '#6BCB77'},
    '7,10,6': { letter: 'E', color: '#6BCB77'},
    '16,8,6': { letter: 'F', color: '#6BCB77'},
    '16,9,6': { letter: 'I', color: '#6BCB77'},
    '8,7,6': { letter: 'E', color: '#6BCB77'},
    '5,10,6': { letter: 'N', color: '#6BCB77'},
    ////////////////////////////////////////////////
};

function createMatrix(w, h){
    const matrix = [];
    while(h--){
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

let arena = createMatrix(COLUMNS, ROWS);

const colors = [
  null,
  '#888888', '#888888', '#888888',
  '#888888', '#888888', '#888888', '#888888'
];

const pieces = {
    T: [[
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ]],
    O: [[
      [2, 2],
      [2, 2]
    ]],
    L: [[
      [0, 3, 0],
      [0, 3, 0],
      [0, 3, 3]
    ]],
    J: [[
      [0, 4, 0],
      [0, 4, 0],
      [4, 4, 0]
    ]],
    I: [[
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0]
    ]],
    S: [[
      [0, 6, 6],
      [6, 6, 0],
      [0, 0, 0]
    ]],
    Z: [[
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0]
    ]]
};

function createPiece(type){
    return pieces[type][0];
}

function drawMatrix(matrix, offset){
    matrix.forEach((row,y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);

                context.strokeStyle = '#ffffff';
                context.lineWidth = 0.05; // Adjust thickness if needed
                context.strokeRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function drawArenaWithLetters() {
    arena.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          context.fillStyle = colors[value];
          context.fillRect(x, y, 1, 1);
        }
        const key = `${y},${x},${selectedTeam}`;
        if (letterMap[key] && value !== 0) {
          context.fillStyle = letterMap[key].color;
          context.font = '1px monospace';
          context.fillText(letterMap[key].letter, x + 0.2, y + 0.9);
        }

        context.strokeStyle = '#ffffff';
        context.lineWidth = 0.02; // Adjust thickness if needed
        context.strokeRect(x, y, 1, 1);
      });
    });
}

function draw(teamcode){
    context.fillStyle = '#000';
    context.fillRect(0,0,canvas.width, canvas.height);

    drawArenaWithLetters(teamcode);
    drawMatrix(player.matrix, player.pos);
}

function merge(arena, player){
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0){
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        })
    })
}

function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
      for (let x = 0; x < m[y].length; ++x) {
        if (m[y][x] !== 0 &&
            (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
          return true;
        }
      }
    }
    return false;
}

let gameOver = false;
let gamePaused = false;

function playerDrop() {
    if(gameOver, gamePaused) return;
    player.pos.y++;
    if (collide(arena, player)) {
      player.pos.y--;
      merge(arena, player);
      playerReset();
      gamePaused = true;
      saveBoardState();
    }
    dropCounter = 0;
}
  
  function playerMove(dir) {
    player.pos.x += dir;
    if (collide(arena, player)) {
      player.pos.x -= dir;
    }
}
  
  function playerRotate() {
    const m = player.matrix;
    for (let y = 0; y < m.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [m[x][y], m[y][x]] = [m[y][x], m[x][y]];
      }
    }
    m.forEach(row => row.reverse());
    if (collide(arena, player)) {
      for (let i = 0; i < 4; ++i) {
        m.forEach(row => row.reverse());
        for (let y = 0; y < m.length; ++y) {
          for (let x = 0; x < y; ++x) {
            [m[x][y], m[y][x]] = [m[y][x], m[x][y]];
          }
        }
        if (!collide(arena, player)) {
          break;
        }
      }
    }
}

function playerReset() {
    const piecesList = 'TJLOSZI';
    player.matrix = createPiece(piecesList[Math.floor(Math.random() * piecesList.length)]);
    player.pos.y = 0;
    player.pos.x = Math.floor((COLUMNS - player.matrix[0].length) / 2);
    if (collide(arena, player)) {
        gameOver = true;
      //arena.forEach(row => row.fill(0));
    }
}

const player = {
    pos: {x: 0, y: 0},
    matrix: null
};

function loadBoardState(teamId) {
    const savedState = localStorage.getItem(`team_${teamId}`);
    return savedState ? JSON.parse(savedState) : createMatrix(COLUMNS, ROWS);  // Default empty board
}

function saveBoardState() {
    if (selectedTeam) {
        localStorage.setItem(`team_${selectedTeam}`, JSON.stringify(arena));
    }
}

function resetAll() {
    for (let i = 1; i <= 6; i++) {
        localStorage.removeItem(`team_${i}`);  // Removes the saved state for each team
    }
    console.log("All teams' board states have been reset.");
}


let selectedTeam  = null;

function selectTeam(teamId, element) {
    let active_el = document.querySelector('.active');
    if(active_el !== null){
        active_el.classList.remove('active');
    }
    element.classList.add('active')
    selectedTeam = teamId;
    arena = loadBoardState(teamId);
    gameOver = false; // Reset game over state
    playerReset(); // Reset the player
    draw(); // Draw the initial board
    startGame();
}
  
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      playerMove(-1);
    } else if (event.key === 'ArrowRight') {
      playerMove(1);
    } else if (event.key === 'ArrowDown') {
      playerDrop();
    } else if (event.key === 'ArrowUp') {
      playerRotate();
    }
});

function startGame() {
    update(selectedTeam);
}

function dropBlock() {
    gamePaused = false;
    playerDrop();
}
  
let dropCounter = 0;
let dropInterval = 800;
let lastTime = 0;
  
function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
      playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}
  