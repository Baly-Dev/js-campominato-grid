// variables
const grid = document.getElementById('grid')
let cells = []
let cellClass;

// creare condizione per variabile width
let width = 10;
const bombsNumber = 20
let bombsArray = []

if (width == 10){
    cellClass = 'cell-10'
}else if(width == 9){
    cellClass = 'cell-9'
}else{
    cellClass = 'cell-7'
}

// function getGrid
function getGrid(width){

    // creo array per bombe e non
    for (i=0; i < 20; i++){

    }
    

    // ciclo per cubo
    for (i=0; i < width * width; i++){
        // creo e aggiungo una cella nel document e nella lista cells 
        const cell = document.createElement('div')
        cell.setAttribute('id', i) 
        cell.classList.add(cellClass)
        if (i == 0){
            cell.append(i + 1)
        }else{
            cell.append(i + 1)
        }
        grid.append(cell)
        cells.push(cell)
    }
}

getGrid(width)
