const squares = document.querySelectorAll('.draw');

Array.from(squares).forEach(square => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    
    })
});