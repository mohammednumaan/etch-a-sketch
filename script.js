const sketchBoard = document.querySelector('.sketch-board');
const sketchContainer = document.querySelector('.sketch-container');
const colorPicker = document.querySelector('#color-picker')
const eraser = document.querySelector('#eraser')
const pen = document.querySelector('#pen')


let inkMode = '#000000'

function generateGrid(size){

  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
      const cell = document.createElement('cell');
      cell.className = 'sketch-cell';
      cell.style.width = (500/size) - 1.6 + 'px'
      cell.style.height = (500/size) - 1.6 + 'px'
      sketchBoard.appendChild(cell);
    }
  }
}


function handleEvents(){
  
  const highlightCallback = (event) => addColorToCell(event.target, inkMode)

  pen.addEventListener('click', (e) => {
    
    inkMode = colorPicker.value 
    
    sketchBoard.addEventListener('mousedown', (e) => {  
      e.preventDefault()
      addColorToCell(e.target, inkMode)
      sketchBoard.addEventListener('mouseover', highlightCallback)
    })
    
    sketchBoard.addEventListener('mouseup', () => {
      sketchBoard.removeEventListener('mouseover', highlightCallback )
    })

  })
  
  colorPicker.addEventListener('click', (e) => inkMode = e.target.value)
  colorPicker.addEventListener('change', (e) => inkMode = e.target.value)
  eraser.addEventListener('click', () => inkMode = '#FFFFFF')

}


function addColorToCell(cell, color){
  if (!cell.classList.contains('sketch-cell')) return;
  cell.style.backgroundColor = color;
}



generateGrid(16)
handleEvents()

window.addEventListener('load', () => colorPicker.value = '#000000')