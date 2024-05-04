const mainContainer = document.getElementById("squarecnter");
let divSize = 16;

for(let i = 0; i < divSize * divSize; i++) {
    let squareSize = (divSize * 50) / divSize;
    const square = document.createElement("div");
    square.classList.add("square");
    mainContainer.appendChild(square);
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
}