// const pokemonArry = [];

// async function fillPokemonArray(arr) {
//     let newArr = []
//     for (let i = 1; i <= 1025; i++) {
//         let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//         let pokemonData = await response.json();
//         newArr.push(pokemonData);
//     }
//     return arr = JSON.parse(JSON.stringify(newArr))
// };
const pokemonArry = [];

async function fillPokemonArray(arr) {
    let newArr = [];
    let requests = [];

    for (let i = 1; i <= 1025; i++) {
        requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()));
    }

    newArr = await Promise.all(requests);
    return arr = JSON.parse(JSON.stringify(newArr));
}


let pokemonArr = [...await fillPokemonArray(pokemonArry)]
let fullPokemonArr = [...pokemonArr]

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

export { fullPokemonArr, reset, searchPokemonName, searchPokemonNum }

