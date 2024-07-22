

function createGroup(list, size) {
    return new Promise ((resolve, reject) => {
        if (list.length === 0 && size > 0) {
            reject(new Error (`List is empty. Cannot create a group size of ${size}`))
        } else if (size > list.length) {
            reject(new Error (`Group too large. Size limited to ${size}`))
        } else {
            let newList = []
            for (let i=0; i<size; i++) {
                let randomIndex = Math.floor(Math.random() * list.length)
                newList.push(list[randomIndex])
            }
            resolve(newList)
        }
    }) 
}

createGroup([1, 2, 3], 3)
    .then(value => console.log(value))
    .catch(error => console.log(error.message))
    
createGroup([1, 2, 3], 4)
.then(value => console.log(value))
.catch(error => console.log(error.message))

createGroup([], 1)
    .then(value => console.log(value))
    .catch(error => console.log(error.message))

