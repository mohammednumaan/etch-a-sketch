const container = document.querySelector(".sketch-container")
const clearButton = document.querySelector("#clear-button")

function makeGrid(val) {    
    for (i = 1; i <= (val * val); i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = 635/val - 1.6 + 'px' 
      cell.style.height =600/val - 1.6 + 'px'
      console.log(cell.style.width) 
      

      container.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.classList.add('hover')
      })

      clearButton.addEventListener('click', () => {
        cell.classList.remove('hover')
    })
    }

    

}


makeGrid(64)


  
