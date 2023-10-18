// Variable declaration
let color = 'black';
let click = true;
let gridError = document.querySelector('.grid-error');

// Create grid based on parameter size
function createGrid(size){
    let grid = document.querySelector('.grid');
    let gridElements = grid.querySelectorAll("div");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        let gridElement = document.createElement('div');
        gridElement.style.backgroundColor = 'white';
        gridElement.addEventListener('mouseover', colorGrid);
        grid.insertAdjacentElement('beforeend', gridElement);
    }
}
createGrid(16);

// Change grid size based on input from form
function changeSize(input){
    if(input >= 2 && input <= 100) {
        createGrid(input);
        gridError.remove(); 
    } else {
        gridError.textContent = `'${input} by ${input}' is not available.`
    }
}

// Color grid
function colorGrid(){
    if(click) {
        if(color === 'random'){
            this.style.backgroundColor =`hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = color;
        }
    }
}

// Change color based on choice parameter
function changeColor(choice){
    color = choice;
}

// Reset board
function resetBoard(){
    let grid = document.querySelector('.grid');
    let gridElements = grid.querySelectorAll("div");
    gridElements.forEach((div) => div.style.backgroundColor = 'white');
}

// Toggle between drawing and not drawing
document.querySelector("body").addEventListener("click", (e) => {
    if(e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Mode: Coloring";
        } else {
            document.querySelector('.mode').textContent = "Mode: Not Coloring";
        }
    }
});