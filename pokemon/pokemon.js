const pokemonUrl = "https://pokeapi.co/api/v2"

axios.get(`${pokemonUrl}/pokemon/`)
    .then(res => {
        console.log(res);
    })
