const pokemonArry = [];

async function fillPokemonArray(arr) {
    let newArr = []
    for (let i = 1; i <= 151; i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let pokemonData = await response.json();
        newArr.push(pokemonData);
    }
    return arr = JSON.parse(JSON.stringify(newArr))
};

let newPokemonArr = await fillPokemonArray(pokemonArry);

// console.log(newPokemonArr);
export { newPokemonArr }

// console.log(pokemonArry);