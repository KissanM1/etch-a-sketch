const grid = document.querySelector(".grid");
newGrid(16);

const newGridButton = document.querySelector(".new-grid");
newGridButton.addEventListener("click", reSizeGrid);

function newGrid(length){
    grid.innerHTML = "";
    for (let i = 0; i < length; i++){
        let row = document.createElement("div");
        row.className = "row";
            for (let j = 0; j < length; j++) {
                let div = document.createElement("div");
                div.className = "grid-box"
                div.addEventListener("mouseenter", function() {
                    console.log("Mouse entered div", i + 1, j + 1);
                    div.style.backgroundColor = "red";
                });
                row.appendChild(div);    
            }
        grid.appendChild(row);
    }
}

function reSizeGrid(){
    length = prompt("How many squares would you like the girds length ot be");
    newGrid(length);
}