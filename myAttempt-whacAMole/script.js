let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
// add a checker to see if the mole has already been clicked, stopping you from spamming the mole
let isClicked = false;


window.onload = function () {
    setGame()
}

function setGame () {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement('div')
        tile.id = i.toString()
        tile.addEventListener("click", selectTile)
        document.getElementById('board').appendChild(tile)
    }
    setInterval(setMole, 2000)
    setInterval(setPlant, 2000)
}

function getRandomTile () {
    let num = Math.floor(Math.random() * 9)
    return num.toString();
}

function setMole () {
    isClicked = false;

    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = '';
    }

    let mole = document.createElement('img')
    mole.src = "../whac-a-mole_Tutorial/whac-a-mole/monty-mole.png"
    
    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id === num) {
        return;
    }
    currMoleTile = document.getElementById(num)
    currMoleTile.appendChild(mole)
}

function setPlant () {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = '';
    }


    let plant = document.createElement('img')
    plant.src = "../whac-a-mole_Tutorial/whac-a-mole/piranha-plant.png"

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id === num) {
        return;
    }
    currPlantTile = document.getElementById(num)
    currPlantTile.appendChild(plant)
}

function selectTile () {
    if (gameOver) {
        return;
    }

    if (!isClicked) {
        if (this == currMoleTile) {
        score += 10
        isClicked = true;
        document.getElementById('score').innerHTML = score.toString();        
    }
}
    if (this == currPlantTile) {
        gameOver = true;
        return document.getElementById('score').innerHTML = "GAME OVER: " + score.toString()
    }
}