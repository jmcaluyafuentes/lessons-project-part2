
function addEventListeners() {
    // Don't Change this function.
    let darkModeButton = document.getElementById("dark-mode")
    let lightModeButton = document.getElementById("light-mode")
    // When the buttons are clicked, they call the respective function
    darkModeButton.addEventListener('click', changeToDarkMode)
    lightModeButton.addEventListener('click', changeToLightMode)
}

function changeToDarkMode() {
    // Modify the body's class list to change the page to dark mode
    const body = document.querySelector('body')
    body.classList.add('darkmode')
}

function changeToLightMode() {
    // Modify the body's class list to change the page to light mode
    const body = document.querySelector('body')
    body.classList.remove('darkmode')
}

function changeBulletsToSquares() {
    // change the bullet cirlces to squares
    const ul = document.querySelector('ul');
    // console.log(ul);
    ul.style.listStyleType = 'square';
    // ul.style.color = 'red';
}

function changeFontSizeAndColour() {
    // Change the body font styles
    const body = document.querySelector('body')
    body.style.fontFamily = 'Arial';
    body.style.fontSize = '28px';
}

// Do not change this function
function activity() {
    addEventListeners()
    changeBulletsToSquares()
    changeFontSizeAndColour()
}

module.exports = {
    changeToDarkMode,
    changeToLightMode,
    changeBulletsToSquares,
    changeFontSizeAndColour
}

