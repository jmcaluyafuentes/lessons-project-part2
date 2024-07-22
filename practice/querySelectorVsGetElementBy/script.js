// let form = document.querySelector("#page-form")
// console.log(form)

// let allP = document.getElementsByTagName('p')
// console.log(allP)

// let odds = document.getElementsByClassName('odd')
// console.log(odds)

let li1 = document.querySelectorAll('li')
let li2 = document.getElementsByTagName('li')

console.log(li1) // output: [li.odd, li, li.odd, li]
console.log(li2) // output: [li.odd, li, li.odd, li]

let newList3 = document.createElement('li')
newList3.textContent = '<li>new li</li>'
document.querySelector('ul').appendChild(newList3)

console.log(li1)  // [li.odd, li, li.odd, li]       -> NodeList is static as a result of querySelectorAll
console.log(li2)  // [li.odd, li, li.odd, li, li]   -> HTMLCollections is live as a result of getElementsByID

let li3 = document.querySelectorAll('li')
console.log(li3) // [li.odd, li, li.odd, li, li]    -> querySelectorAll captured the updated li the moment it is called again thru li3

