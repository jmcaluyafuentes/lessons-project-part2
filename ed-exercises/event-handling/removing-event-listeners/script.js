function challengeOne() {
    function changeValue(value) {
        // This is the callback function for the event handler
        // It should increment the value in the <p> by value
        const counter = document.getElementById('counter-one')
        let currentValue = parseInt(counter.textContent, 10)

        counter.textContent = currentValue + value;
    }
    // Challenge 1: Add an event listener to each button that invokes
    // the changeValue handler function with the correct value for the button
    document.getElementById('five').addEventListener('click', ()=>changeValue(5))
    document.getElementById('ten').addEventListener('click', ()=>changeValue(10))
    document.getElementById('fifteen').addEventListener('click', ()=>changeValue(15))
}

function challengeTwo() {
    function changeValue(event) {
        // This is the callback function for the event handler
        // It should either increment the value, decrement the value,
        // or stop changing the value in the <p> based on the button that is clicked
        const counter = document.getElementById('counter-two')
        let currentValue = parseInt(counter.textContent, 10)

        if (event.value == 1) {
            currentValue += 1
        } else {
            currentValue -= 1
        }
        
        console.log(currentValue)
        counter.textContent = currentValue
    }
    // Challenge 2: Use the event target to determine the value on the button
    // that triggered the click event. Add that value to the current value
    // in the paragraph and update what is shown on the page.
    // When the Stop button is clicked, the event handlers should all be removed.
    // const btnPos1 = document.querySelector('.challenge-two[value="1"]')
    // const btnNeg1 = document.querySelector('.challenge-two[value="-1"]')
    // const btnStop = document.getElementById('stop')
    // btnNeg1.addEventListener('click', ()=>console.log('clicked'))

    const buttons = document.querySelectorAll('.challenge-two')
    buttons.forEach((button)=> button.addEventListener('click', changeValue))

    buttons.forEach(button => console.log(button))   

    document.getElementById('stop').addEventListener('click', ()=> {
        console.log('Stop button clicked')
        buttons.forEach(button => button.removeEventListener('click', changeValue))
        buttons.forEach(button => {
            console.log('Removing class from:', button);
            button.classList.remove('challenge-two');
        })
        buttons.forEach(button => console.log(button))      
    })
}

// challengeTwo()


function activity() {
    challengeOne()
    challengeTwo()
}

try {
    module.exports = {
        challengeOne,
        challengeTwo
    }
} catch {
}
