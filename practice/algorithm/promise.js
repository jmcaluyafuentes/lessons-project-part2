// const fetch = async () => {
//     return new Promise((res, rej) => {
//         if(true) {
//             res('Fetching Success')
//         } else {
//             rej('Fetching Rejected')
//         }
//     })
// }

// fetch()
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((rej) => {
//         console.log(rej)
//     })

const fetchData = async () => {

    try {
        const response = await fetch('https://api.example.com/data');

        if (!response.ok) {
            throw new Error(`Fetching unsuccessful: ${response.status}`)
        }
        console.log('Fetched data: ', response);
        
    } catch (error) {
        if (error.name === "TypeError") {
            console.error('Network error occurred: ', error.message);
        } else {
            console.error('Error: ', error.message);
        }
    }
};

fetchData();