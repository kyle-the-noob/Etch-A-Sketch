const mainContainer = document.getElementById("squarecnter");
const changeBtn = document.getElementById("sizebtn");
let divSize = 16;
let userInput;

function generateGrid () {
    let squareSize = (divSize * 30) / divSize;
    for(let i = 0; i < divSize * divSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        mainContainer.appendChild(square);

        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

    square.addEventListener("mouseover", () => { square.style.backgroundColor = "black";})

    }
    changeBtn.addEventListener("click", () => {
        userInput = prompt("Choose a number between 1 - 100", 16)
        mainContainer.innerHTML = ""

        if (userInput > 0 || userInput <= 100){
            divSize = userInput;
            generateGrid();
        } else {
            return;
        }
    })
}
generateGrid();
