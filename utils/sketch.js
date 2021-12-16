const squareContainer = document.querySelector('.squares-container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row', 'draw');
    for (let j = 0; j < 16; j++){
        const column = document.createElement('div');
        column.classList.add('column', 'draw');
        row.appendChild(column);
    }
    squareContainer.appendChild(row);
}