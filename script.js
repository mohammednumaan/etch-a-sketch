// CONSTANTS
const DEFAULT_COLOR = '#000000'

// DOM ELEMENTS
const sketchBoard = document.querySelector('.sketch-board');
const sketchContainer = document.querySelector('.sketch-container');
const colorPicker = document.querySelector('#color-picker')
const penTool = document.querySelector('#pen')
const eraserTool = document.querySelector('#eraser')
const clearTool = document.querySelector('#clear')
const sketchSize = document.querySelector('#sketch-size');
const sizeDisplay = document.querySelector('#size-display');

// ink mode to determine which color to apply on sketch-cells
let inkMode = DEFAULT_COLOR;

// attaching required listeners initially
window.onload = () => {
  colorPicker.value = DEFAULT_COLOR
  sketchSize.value = 16;
}

penTool.onclick = () => {
  setInkMode(colorPicker.value)
  sketchHandler();
}

colorPicker.onchange = (e) => setInkMode(e.target.value);
eraserTool.onclick = () => setInkMode('#FFFFFF'); 
clearTool.onclick = () => Array.from(sketchBoard.children).forEach(child => child.style.backgroundColor = null)


// function to generate the grid with the given input (size)
function generateGrid(size){

  sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++){
    const cell = document.createElement('cell');
    cell.className = 'sketch-cell';
    sketchBoard.appendChild(cell);
  }
}

// function to handle sketch events
function sketchHandler(){
  
  // callbacks that can later be referenced to remove respective listeners
  const highlightCallback = (e) => addColorToCell(e.target, inkMode)
  const clearHighlightCallback = () => sketchBoard.removeEventListener('mouseover', highlightCallback);
  
  // attaching listeners to the sketch-board 
  sketchBoard.addEventListener('mousedown', (e) => {  
    e.preventDefault()
    addColorToCell(e.target, inkMode)

    sketchBoard.addEventListener('mouseover', highlightCallback)
  })
    
  // detaching the mouseover events to prevent unnecessary sketch-cell coloring
  // when the mousdown event is released
  sketchBoard.addEventListener('mouseup', () => {
    sketchBoard.removeEventListener('mouseover', highlightCallback)
    window.removeEventListener('mouseup', clearHighlightCallback);
  })
}

// helper function to color the target sketch-cell
function addColorToCell(cell, color){
  if (!cell.classList.contains('sketch-cell')) return;
  cell.style.backgroundColor = color;
}

// helper function to set ink mode
function setInkMode(mode){
  inkMode = mode
}

// attach listener to track slider input and update the grid respectively
sketchSize.addEventListener('input', (e) => {
  sketchBoard.replaceChildren()
  generateGrid(+e.target.value)
  sizeDisplay.textContent = `Sketch Area : ${e.target.value} x ${e.target.value}`
})

// initial grid render (16x16)
generateGrid(16);