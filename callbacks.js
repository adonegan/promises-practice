function DisplayPokemon(callback) {
    callback().then((data) => {
        data = data.results
        data.forEach((pokemon,index) => {
            console.log(`Pokemon ${index+1}: ${pokemon.name}`)
        })
    })
}

// callback function
// fetch returns a Promise
function fetchPokemon() {
    return fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
}

DisplayPokemon(fetchPokemon)