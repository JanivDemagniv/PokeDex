const pokemonArry = [];

async function fillPokemonArray(arr) {
    let newArr = []
    for (let i = 1; i <= 1025; i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let pokemonData = await response.json();
        newArr.push(pokemonData);
    }
    return arr = JSON.parse(JSON.stringify(newArr))
};

let pokemonArr = await fillPokemonArray(pokemonArry);

let fullPokemonArr = [...pokemonArr]

const searchPokemonName = (text) => {
    fullPokemonArr = fullPokemonArr.filter((pokemon) => {
        let name = pokemon.name.toLowerCase();
        return name.includes(text.toLowerCase())

    })
}

const searchPokemonNum = (num) => {
    fullPokemonArr = fullPokemonArr.filter((pokemon) => {
        let number = pokemon.id.toString();
        return number.includes(num.toString());

    })
}

const reset = () => {
    fullPokemonArr = [...pokemonArr];
}

export { fullPokemonArr, reset, searchPokemonName, searchPokemonNum }

