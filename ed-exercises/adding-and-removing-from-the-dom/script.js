function activity() {
    // 1. Anchor code here
    document.querySelector('a').textContent = 'DOM Manipulation'

    // 2. List Item code here
    let ul = document.querySelector('ul')
    let lastLi = ul.children[3]
    ul.removeChild(lastLi)
    
    // 3. Form code here
    let form = document.getElementById('page-form')
    let inputBox = document.querySelector('input[type="text"]')
    let label = document.createElement('label')
    label.textContent = 'Name:'
    form.insertBefore(label, inputBox)

    // 4. Paragraph code here
    const pAnswer = document.createElement('p')
    pAnswer.textContent = 42
    document.getElementById('question').appendChild(pAnswer)
}

// Don't remove this
activity()
