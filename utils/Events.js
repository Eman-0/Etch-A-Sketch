import { Sketch } from "./sketch.js";

function drawEvent () {
    const squares = document.querySelectorAll('.draw');

    Array.from(squares).forEach(square => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    });
}

const clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', (e) => {
    location.reload();
})

function displayNumSquares(numSquares) {
    const domDisplay = document.querySelector('.num-squares');

    domDisplay.textContent = numSquares + ' X ' + numSquares;
}

const slider = document.querySelector('.slider')

slider.oninput = () => {
    const squareContainer = document.querySelector('.squares-container');
    while(squareContainer.firstChild){
        squareContainer.removeChild(squareContainer.firstChild);
    }
    displayNumSquares(slider.value);
    Sketch(slider.value);
    drawEvent();
}

export { drawEvent };