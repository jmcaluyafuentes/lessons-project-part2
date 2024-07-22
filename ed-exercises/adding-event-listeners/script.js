function challengeOne() {
    document.getElementById('challenge-one').addEventListener('click', () => {
        console.log('Hello World');
    })
}

function challengeTwo() {
    document.getElementById('challenge-two').addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'New List Item';
        document.querySelector('ul').append(newLi);
    })
}


function challengeThree() {
    const colours = ['rgb(238, 130, 238)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)']
    // Identify the current background color
    const divChallenge3 = document.getElementById('rainbow');
    const backgroundColour = window.getComputedStyle(divChallenge3).backgroundColor;
    console.log(backgroundColour);

    // Find the matching colour in the colours array
    let indexOfBackgroundColour = colours.indexOf(backgroundColour)
    console.log(indexOfBackgroundColour);

    // If button is clicked, change the background color to the next colour in the array
    document.getElementById('challenge-three').addEventListener('click', () => {

        // console.log(indexOfBackgroundColour);
        // console.log(colours.length);
        
        if(indexOfBackgroundColour < colours.length-1) {
            indexOfBackgroundColour += 1;
        } else {
            indexOfBackgroundColour = 0;
            // console.log(indexOfNextColour);
        }
        console.log(indexOfBackgroundColour);
        const nextBackgroundColour = colours[indexOfBackgroundColour];
        // console.log(nextBackgroundColour);
        document.getElementById('rainbow').style.backgroundColor = nextBackgroundColour;     

    })


}

function activity() {
    challengeOne()
    challengeTwo()
    challengeThree()
}

try {
    module.exports = {
        challengeOne,
        challengeTwo,
        challengeThree
    } 
} catch {
}
