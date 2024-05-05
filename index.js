const mainContainer = document.getElementById("squarecnter");
/*let baseDivivSize = 16;

for(let i = 0; i < baseDivivSize * baseDivivSize; i++) {
    let squareSize = (baseDivivSize * 50) / baseDivivSize;
    const square = document.createElement("div");
    square.classList.add("square");
    mainContainer.appendChild(square);
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;

square.addEventListener("mouseover", () => { square.style.backgroundColor = "black";})
}*/

const changeBtn = document.getElementById("sizebtn");
let divSize = 16;
let userInput;

/*changeBtn.addEventListener("click", () => {
    userInput = prompt("Choose a number between 1 - 100")

    if(userInput != null && userInput > 0 || userInput < 100){
        divSize = userInput;
        document.mainContainer.removeChildren(square);
        generateGrid();
    } else {
        alert("Invaild number choose a number from 1 - 100")
    }
})*/

function generateGrid () {
    let squareSize = (divSize * 40) / divSize;
    for(let i = 0; i < divSize * divSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        mainContainer.appendChild(square);

        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

    square.addEventListener("mouseover", () => { square.style.backgroundColor = "black";})

    }
    changeBtn.addEventListener("click", () => {
        userInput = prompt("Choose a number between 1 - 100")
        mainContainer.innerHTML = ""

        if(userInput > 0 || userInput <= 100){
            divSize = userInput;
            generateGrid();
        } else if (userInput == null || userInput < 0 || userInput > 100) {
            alert("Invaild number choose a number from 1 - 100")
        }
    })
} generateGrid();
