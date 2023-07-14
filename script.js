const container = document.querySelector(".sketch-container")
const clearButton = document.querySelector("#clear")
const defaultButton = document.querySelector("#default")
const rgbButton = document.querySelector("#rgb")
const size = document.querySelector("#grid-size")




function makeGrid(val) {  
  
    for (i = 1; i <= (val * val); i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = 640/val - 1.6 + 'px' 
      cell.style.height =625/val - 1.6 + 'px'
      console.log(cell.style.width) 
      

      container.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.classList.add('hover')
      })

      defaultButton.addEventListener("click", () => {
        cell.addEventListener("mouseover", () => {
          cell.classList.add('hover')
          cell.style.background = null
        })
      })

      rgbButton.addEventListener("click", () => {
        cell.addEventListener('mouseover', () => {
          cell.style.background = generateRandomColor()
        })
      })

      clearButton.addEventListener('click', () => {
        cell.classList.remove('hover')
        cell.style.background = null
    })

      



    
  }
}

function generateRandomColor(){
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ' , '+ g +','+ b +')'
}

function getGridSize(){
  let userInput = Number(prompt('Enter Your Grid-Size (16 - 64) :'))
  if (userInput < 16 || userInput > 64) {
    userInput = Number(prompt('Please Enter Valid Grid-Size (16 - 64) :'))
  }
  return userInput
}

size.addEventListener('click', () => {
  container.innerHTML = ""
  grid_size = getGridSize()
  makeGrid(grid_size)

})


makeGrid(16)
  
