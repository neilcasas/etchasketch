// Create grid based on parameter size
function createGrid(size){
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        let gridElement = document.createElement('div');
        gridElement.style.backgroundColor = 'blue';
        grid.insertAdjacentElement('beforeend', gridElement);
    }
}

// Change grid size based on input from form
function changeSize(input){
    if(input => 2 && input <= 100) createGrid(input);
    else
        console.log("error");
}