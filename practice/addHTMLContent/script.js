

// Method 1:
// let contentD = document.getElementById('content');
// contentD.innerHTML = '<p>The content goes here.</p>';

// Method 2:
let contentD = document.querySelector('#content');
let para = document.createElement('p');
para.textContent = 'The content goes here.';
contentD.appendChild(para);
