// Make fetch requests to a URL like:
// url

// Random number generator function
function randomPokemonId(){
    return Math.floor(Math.random() * 1025) + 1;
}

// // Fetch one Pokemon function
// function fetchOnePokemoin(){
//     // fetch().then(return data)
// }

async function fetOnePokemon(){
    let response = await fetch(` ${randomPokemonId()}`)
    console.log(response);
}

export {}