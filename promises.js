const fetchPokemonPromise = fetch('https://pokeapi.co/api/v2/pokemon')

fetchPokemonPromise
    .then((response) => response.json())
    .then((data) => {
        data = data.results
        data.forEach((pokemon, index) => {
            console.log(`Poke ${index+1}: ${pokemon.name}`)
        })
    })