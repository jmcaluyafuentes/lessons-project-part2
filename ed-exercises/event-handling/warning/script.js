const btn = document.getElementById('makeItRed');
const div = document.getElementById('warning');

btn.addEventListener('click', () => {
    let divColour = window.getComputedStyle(div).backgroundColor
    console.log(divColour)

    const red = 'rgb(255, 0, 0)'

    if (divColour !== red) {
        div.style.backgroundColor = red;
        btn.textContent = 'Clear warning';
    } else {
        // console.log('RED')
        div.style.backgroundColor = 'white';
        btn.textContent = 'Make it Red';
    }
})