import { drawEvent } from "./Events.js"

function Sketch (sizeOfGrid) {
    const squareContainer = document.querySelector('.squares-container');
    console.log(sizeOfGrid);
    for (let i = 0; i < sizeOfGrid; i++) {
        const row = document.createElement('div');
        row.classList.add('row', 'draw');
        for (let j = 0; j < sizeOfGrid; j++){
            const column = document.createElement('div');
            column.classList.add('column', 'draw');
            row.appendChild(column);
        }
        squareContainer.appendChild(row);
    }
    drawEvent();
}

Sketch(16);
export { Sketch }