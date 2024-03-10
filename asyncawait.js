async function fetchPokemon(){
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        return data
    } catch (err){
        console.log(err)
    } 
}

const poke = fetchPokemon()
poke.then((data) => {
    data = data.results
    data.forEach((pokemon, index) => {
        console.log(`Pokémon ${index+1}: ${pokemon.name}`)
    })
})
console.log('Getting Pokemon...')

