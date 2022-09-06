const gridButton = document.getElementById("gridgenerator");

gridButton.addEventListener("click", function () {

    console.log("click");
    const grid = document.getElementById("gridDom");
    grid.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        const gridCell = document.createElement("div");
        gridCell.innerHTML = i;
        gridCell.className = "gridCell";
        grid.append(gridCell);

        console.log(i);

        gridCell.addEventListener("click", function () {

            console.log("click");

            const isEven = checkIsEven(i);

            if (isEven) {
                gridCell.classList.add("evenbox");

            } else {
                gridCell.classList.add("oddbox");
            }
        });
    }
}
);

function checkIsEven(number) {

    return number % 2 === 0;
}

