const container = document.querySelector(".sketch-container")

function makeGrid(val) {    
    for (i = 1; i <= val * val; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      container.appendChild(cell);
    }

}

makeGrid(16)


  
