// variables
const grid = document.getElementById('grid')
let cellEasy = 'cell-10'
let cellHard = 'cell-9'
let cellDifficult = 'cell-7'

/* creare condizione per variabile width */
let width = 10;
let cells = []

// function getGrid
function getGrid(width){
    // ciclo per cubo
    for (i=0; i < width * width; i++){
        // creo e aggiungo una cella nel document e nella lista cells 
        const cell = document.createElement('div')
        cell.setAttribute('id', i) 
        cell.classList.add('cell-10')
        grid.append(cell)
        cells.push(cell)
    }
}

getGrid(width)
