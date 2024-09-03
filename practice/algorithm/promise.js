const fetch = () => {
    return new Promise((res, rej) => {
        if(true) {
            res('Fetching Success')
        } else {
            rej('Fetching Rejected')
        }
    })
}

fetch()
    .then((res) => {
        console.log(res)
    })
    .catch((rej) => {
        console.log(rej)
    })
