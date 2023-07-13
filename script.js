const container = document.querySelector(".sketch-container")


for (let i = 0; i<16; i++){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    container.appendChild(cell)

    cell.addEventListener('mouseover',() => {
        cell.classList.add('hover')
    })
    
    for (let j = 0; j<15; j++){
        let cellV = document.createElement('div')
        cellV.classList.add('cellV')
        container.appendChild(cellV)

        cellV.addEventListener('mouseover',() => {
            cellV.classList.add('hover')
        })
    }
}