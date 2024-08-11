// Things to add. Time limit, reset button, multiple pirahna plant, random setInterval time,
let currMoleTile;
let currPlantTile;
let score = 0
let gameOver = false

window.onload = function () {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) { //i goes from 0-8 and stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement('div')
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        //we are creating new div with unique id's and appending it to the 'board' div
        document.getElementById('board').appendChild(tile)
    }
    setInterval(setMole, 1000) //setInterval will call the setMole() function every 1000 mili secs or 1 secs
    setInterval(setPlant, 2000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString();
}

function setMole() {

    if (gameOver){
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement('img')
    mole.src = "whac-a-mole/monty-mole.png"

    let num = getRandomTile()
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num)
    currMoleTile.appendChild(mole)
}

function setPlant() {

    if (gameOver) {
        return
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = ""
    }

    let plant = document.createElement('img')
    plant.src = "whac-a-mole/piranha-plant.png"

    let num = getRandomTile()
    if (currMoleTile && currMoleTile.id == num) {   
      return;
    }

    currPlantTile = document.getElementById(num)
    currPlantTile.appendChild(plant)
}

function selectTile() {

    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10
        document.getElementById("score").innerText = score.toString()
    } else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString()
        gameOver = true;
    }
}