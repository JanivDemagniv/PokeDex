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

const searchPokemonType = (type) => {
    fullPokemonArr = fullPokemonArr.filter((pokemon) => {
        if (pokemon.types.length == 2) {
            if (pokemon.types[0].type.name == type || pokemon.types[1].type.name == type) {
                return pokemon;
            }
        } else if (pokemon.types.length == 1) {
            if (pokemon.types[0].type.name == type) {
                return pokemon
            }
        }
    })
}

const reset = () => {
    fullPokemonArr = [...pokemonArr];
}

export { fullPokemonArr, reset, searchPokemonName, searchPokemonNum, searchPokemonType }

