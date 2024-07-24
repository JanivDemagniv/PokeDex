const pokemonArry = [];

async function fillPokemonArray(arr, num1, num2) {
    let newArr = []
    for (let i = num1; i <= num2; i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let pokemonData = await response.json();
        newArr.push(pokemonData);
    }
    return arr = JSON.parse(JSON.stringify(newArr))
};

let fullPokemonArr151 = [...await fillPokemonArray(pokemonArry, 1, 151)];
let fullPokemonArr251 = [...await fillPokemonArray(pokemonArry, 152, 251)];
let fullPokemonArr386 = [...await fillPokemonArray(pokemonArry, 252, 386)];
let fullPokemonArr493 = [...await fillPokemonArray(pokemonArry, 387, 493)];
let fullPokemonArr649 = [...await fillPokemonArray(pokemonArry, 494, 649)];
let fullPokemonArr721 = [...await fillPokemonArray(pokemonArry, 650, 721)];
let fullPokemonArr809 = [...await fillPokemonArray(pokemonArry, 722, 809)];
let fullPokemonArr905 = [...await fillPokemonArray(pokemonArry, 810, 905)];
let fullPokemonArr1025 = [...await fillPokemonArray(pokemonArry, 906, 1025)];

// let fullPokemonArr = [...fullPokemonArr151, ...fullPokemonArr251, ...fullPokemonArr386, ...fullPokemonArr493, ...fullPokemonArr649]
// async function start() {
//     let pokemonArr = [];
//     pokemonArr = await fillPokemonArray(pokemonArry, 1, 151);
//     return pokemonArr
// }
// fullPokemonArr = [...await start()];



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

export { fullPokemonArr151, fullPokemonArr251, fullPokemonArr386, fullPokemonArr493, fullPokemonArr649, fullPokemonArr721, fullPokemonArr809, fullPokemonArr905, fullPokemonArr1025, reset, searchPokemonName, searchPokemonNum }

