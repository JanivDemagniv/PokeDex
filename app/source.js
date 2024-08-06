const pokemonArry = [];

async function fillPokemonArray(arr) {
    let newArr = [];
    let requests = [];

    for (let i = 1; i <= 1025; i++) {
        requests.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .catch(error => {
                    console.error(`Failed to fetch data for Pokémon ID ${i}:`, error);
                    return null; // Return null or some default value in case of an error
                })
        );
    }

    try {
        newArr = await Promise.all(requests);
        newArr = newArr.filter(item => item !== null); // Filter out any failed requests
    } catch (error) {
        console.error('Error during Promise.all:', error);
    }

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

