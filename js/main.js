// variables
const grid = document.getElementById('grid')
const btnSelect = document.getElementById('btnSelect')
const btnReset = document.getElementById('btnReset')

let width = 10
let level = 'easy'

let cells = []
let cellClass;

btnSelect.addEventListener('click', function(){
    level = document.getElementById('difficulty').value

    if (level == 'impossible'){
        width = 7
        cellClass = 'cell-7'
    }else if(level == 'hard'){
        width = 9
        cellClass = 'cell-9'
    }else {
        width = 10
        cellClass = 'cell-10'
    }

    getGrid(width)
})

btnReset.addEventListener('click', function(){
    level = document.getElementById('difficulty').value = ""
})

// function getGrid
function getGrid(width){
    // ciclo per creazione griglia
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
    selectCell()
}

// function selectCell
function selectCell(){
    for (i = 0; i < cells.length; i++){
        let currentCellId = document.getElementById(i)
        currentCellId.addEventListener('click', function(){
            if (this.classList.contains('cell-clicked')){
                this.classList.remove('cell-clicked')
            }else{
                this.classList.add('cell-clicked')
            }
        })
    }
}