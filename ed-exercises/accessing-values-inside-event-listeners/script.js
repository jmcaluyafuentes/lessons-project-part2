function challengeOne() {
    const form = document.querySelector('form');
    // console.log(form)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // console.log(event);

        const name = document.getElementById('name').value;
        const language = document.getElementById('language').value;
        const cohort = document.getElementById('cohort').value;

        document.getElementById('output').textContent = `Hello ${name}, hope you are enjoying learning about ${language} in ${cohort}`
    })
}

function challengeTwo() {
    document.getElementById('change-theme').addEventListener('click', () => {

        const button = document.getElementById('change-theme').textContent;

        if(button === 'Dark Mode'){
            document.getElementById('challenge-two').style.backgroundColor = 'black';
            document.getElementById('change-theme').style.backgroundColor = 'black';
            document.getElementById('change-theme').style.color = 'white';
            document.getElementById('change-theme').textContent = 'Light Mode';
        } else {
            document.getElementById('challenge-two').style.backgroundColor = 'white';
            document.getElementById('change-theme').style.backgroundColor = 'white';
            document.getElementById('change-theme').style.color = 'black';
            document.getElementById('change-theme').textContent = 'Dark Mode';
        }

        
    })
}

function challengeThree() {
    const dragger = document.getElementById('dragger');
    const orangeDivs = document.querySelectorAll('.drag');
    const lastOrangeDiv = document.getElementById('to');

    dragger.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', ''); // Necessary for drag and drop
        console.log('drag')
    });

    orangeDivs.forEach(div => {
        div.addEventListener('dragover', function(event) {
            event.preventDefault(); // Allow dropping
            console.log('drop')
            div.style.backgroundColor = '#ddd'
        });

        div.addEventListener('drop', function(event) {
            event.preventDefault(); // Prevent default handling

            // if (div === lastOrangeDiv) {
            //     dragger.style.backgroundColor = 'green';
            // } else {
            //     dragger.style.backgroundColor = 'red';
            // }

            // Check if the dragged item is the dragger
            const draggedElement = event.dataTransfer.getData('text/plain');
            if (draggedElement === 'dragger') {
                // Change the dragger's color based on the target div
                if (div === lastOrangeDiv) {
                    dragger.style.backgroundColor = 'green';
                } else {
                    dragger.style.backgroundColor = 'red';
                }
                
                // Remove the dragger from its original position
                dragger.style.position = 'absolute';
                dragger.style.left = `${event.clientX}px`;
                dragger.style.top = `${event.clientY}px`;
                
                // Optionally, update the visual feedback
                div.style.backgroundColor = 'orange';
            }
        });
    });
}; 

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
