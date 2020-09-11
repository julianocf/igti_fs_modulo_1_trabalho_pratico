window.addEventListener("load", start);

function start() {
    document
        .querySelector("#range-red")
        .addEventListener("input", updateScreen);
    document
        .querySelector("#range-green")
        .addEventListener("input", updateScreen);
    document
        .querySelector("#range-blue")
        .addEventListener("input", updateScreen);

    updateScreen();
}

function updateScreen() {
    let red = document.querySelector("#range-red").value;
    let green = document.querySelector("#range-green").value;
    let blue = document.querySelector("#range-blue").value;

    updateInputs(red, green, blue);
    updateColorSquare(red, green, blue);
}

function updateInputs(red, green, blue) {
    document.querySelector("#text-red").value = red;
    document.querySelector("#text-green").value = green;
    document.querySelector("#text-blue").value = blue;
}

function updateColorSquare(red, green, blue) {
    document.querySelector("#color-square").style.background =
        "rgb( " + red + ", " + green + ", " + blue + " )";
}
