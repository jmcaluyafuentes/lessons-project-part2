// const temp1 = document.getElementById('heading');
// temp1.innerText = 'Goodbye';

// const heading = document.getElementById('heading');
// heading.innerText = 'Goodbye';

// const heading = document.querySelector('h1');
// // heading.innerText = 'Goodbye';
// heading.innerHTML = 'Goodbye <span style="color:red">World!</span>'


// const el = document.querySelector('li')
// const el = document.querySelectorAll('li')
// console.log(el)

// const newDiv = document.createElement('div')
// newDiv.innerHTML = '<p>Lorem ipsum dolor sit amet</p>'
// newDiv.style.color = 'red'
// // document.querySelector('body').appendChild(newDiv)
// document.querySelector('body').insertBefore(newDiv, document.querySelector('ul'))
// console.log(newDiv)

// document.body.innerHTML += '<div><p>Lorem ipsum dolor sit amet</p></div>'

const items = [
    'Adding to the DOM',
    'Querying the DOM',
    'Changing the DOM',
    'Event Listener'
]

// const ul = document.querySelector('ul')

// Populate the ul with an li representing each item
// let html = ''
// for (let item of items){
//     html += `<li>${item}</li>`
//     // const newLi = document.createElement('li')
//     // ul.appendChild(newLi)
//     // newLi.innerHTML = item
//     // ul.innerHTML += `<li>${item}</li>`
// }
// ul.innerHTML = html

// const lis = items.map(item => `<li>${item}</li>`)
// // console.log(lis.join(''))
// ul.innerHTML = lis.join('')
document.querySelector('ul').innerHTML = items.map(item => `<li>${item}</li>`).join('')

// Handle a mouse click on the h1 element
// const heading = document.querySelector('h1')
// heading.addEventListener('click', event => event.target.innerText += '!')

const ul = document.querySelector('ul')
const newItem = document.querySelector('#newItem')
const btn = document.querySelector('button')

// ul.innerHTML = items.map(item => `<li>${item}</li>`).join('')

btn.addEventListener('click', e => {
    // // const input = newItem.value
    // const newLi = document.createElement('li')
    // // newLi.innerContent = input
    // newLi.innerContent = newItem.value
    // ul.appendChild(newLi)

    ul.innerHTML += `<li>${(newItem).value}</li>`
    newItem.value = ''
})



