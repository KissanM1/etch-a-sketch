const container = document.querySelector(".container");

for (let i = 0; i < 16; i++){
    let row = document.createElement("div");
    row.className = "row";
        for (let j = 0; j < 16; j++) {
            let div = document.createElement("div");
            div.className = "grid-box"
            div.addEventListener("mouseenter", function() {
                console.log("Mouse entered div", i + 1, j + 1);
                div.style.backgroundColor = "red";
            });
            row.appendChild(div);    
        }
    container.appendChild(row);
}
