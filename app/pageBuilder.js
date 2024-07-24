import { reset, searchPokemonName, searchPokemonNum, fullPokemonArr151, fullPokemonArr251, fullPokemonArr386, fullPokemonArr493, fullPokemonArr649, fullPokemonArr721, fullPokemonArr809, fullPokemonArr905, fullPokemonArr1025 } from "./source.js";

const screen = document.getElementById('screen');
const headLine = document.getElementById('headLine');
const sreachInputByName = document.getElementById('searchName');
const sreachInputByNum = document.getElementById('searchNum');
const loader = document.getElementById('loader');
const searchAera = document.getElementById('searchAera');

let fullPokemonArr = [];
//search bar disable at load.
searchAera.style.display = "none"
//bulding screen options.
const gen1 = document.createElement('div');
const btn1 = document.createElement('button');
btn1.innerHTML = "Gen 1"
btn1.addEventListener('click', () => {
    listBuilder(fullPokemonArr151)
    searchAera.style.display = "block";
})
gen1.appendChild(btn1)
screen.appendChild(gen1)
//bulding screen options.
const gen2 = document.createElement('div');
const btn2 = document.createElement('button');
btn2.innerHTML = "Gen 2"
btn2.addEventListener('click', () => {
    listBuilder(fullPokemonArr251)
    searchAera.style.display = "block";
})
gen2.appendChild(btn2)
screen.appendChild(gen2)
//bulding screen options.
const gen3 = document.createElement('div');
const btn3 = document.createElement('button');
btn3.innerHTML = "Gen 3"
btn3.addEventListener('click', () => {
    listBuilder(fullPokemonArr386)
    searchAera.style.display = "block";
})
gen3.appendChild(btn3)
screen.appendChild(gen3)
//bulding screen options.
const gen4 = document.createElement('div');
const btn4 = document.createElement('button');
btn4.innerHTML = "Gen 4"
btn4.addEventListener('click', () => {
    listBuilder(fullPokemonArr493)
    searchAera.style.display = "block";
})
gen4.appendChild(btn4)
screen.appendChild(gen4)
//bulding screen options.
const gen5 = document.createElement('div');
const btn5 = document.createElement('button');
btn5.innerHTML = "Gen 5"
btn5.addEventListener('click', () => {
    listBuilder(fullPokemonArr649)
    searchAera.style.display = "block";
})
gen5.appendChild(btn5)
screen.appendChild(gen5)
// bulding screen options.
const gen6 = document.createElement('div');
const btn6 = document.createElement('button');
btn6.innerHTML = "Gen 6"
btn6.addEventListener('click', () => {
    listBuilder(fullPokemonArr721)
    searchAera.style.display = "block";
})
gen6.appendChild(btn6)
screen.appendChild(gen6)
//bulding screen options.
const gen7 = document.createElement('div');
const btn7 = document.createElement('button');
btn7.innerHTML = "Gen 7"
btn7.addEventListener('click', () => {
    listBuilder(fullPokemonArr809)
    searchAera.style.display = "block";
})
gen7.appendChild(btn7)
screen.appendChild(gen7)
//bulding screen options.
const gen8 = document.createElement('div');
const btn8 = document.createElement('button');
btn8.innerHTML = "Gen 8"
btn8.addEventListener('click', () => {
    listBuilder(fullPokemonArr905)
    searchAera.style.display = "block";
})
gen8.appendChild(btn8)
screen.appendChild(gen8)
//bulding screen options.
const gen9 = document.createElement('div');
const btn9 = document.createElement('button');
btn9.innerHTML = "Gen 9"
btn9.addEventListener('click', () => {
    listBuilder(fullPokemonArr1025)
    searchAera.style.display = "block";
})
gen9.appendChild(btn9)
screen.appendChild(gen9)


headLine.addEventListener('click', () => {
    window.location.reload()
})

function nameWithCapitalLetters(str) {
    return str.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('-')
};

function makeThreeDigitNumber(num) {
    return num.toString().padStart(3, '0');
};

const infoBuilder = (pokemonName) => {
    fullPokemonArr.filter((pokemon) => {
        if (pokemon.name === pokemonName) {
            screen.innerHTML = "";
            const pokeName2 = document.createElement('div');
            pokeName2.className = "pokeName2";
            pokeName2.innerHTML = "<h4>Name:</h4>" + nameWithCapitalLetters(pokemon.name);
            const pokePic = document.createElement('div');
            pokePic.className = "pokePic";
            const pokePic2 = document.createElement('img');
            pokePic2.src = pokemon.sprites.other["official-artwork"].front_default;
            pokePic.appendChild(pokePic2);
            const pokeNum = document.createElement('div');
            pokeNum.className = "pokeNum";
            pokeNum.innerHTML = "<h4>Number:</h4>" + makeThreeDigitNumber(pokemon.id);
            const pokeType = document.createElement('div');
            pokeType.className = "pokeType";
            let dataArr = pokemon.types
            pokeType.innerHTML = `<h4>Type:</h4> ${checkType(dataArr)}`;
            const pokeWrapperInfo = document.createElement('div');
            const PokeWheghiet = document.createElement('div');
            PokeWheghiet.className = "PokeWheghiet";
            PokeWheghiet.innerHTML = "<h4>Weight:</h4>" + pokemon.weight + "<br>" + "<h4>Height:</h4>" + pokemon.height;
            const pokeStats = document.createElement('div');
            pokeStats.className = "pokeStats";
            pokeStats.innerHTML = `<h4>Basic Stats:</h4> ${pokemon.stats[0].stat.name}:${pokemon.stats[0].base_stat}<br> ${pokemon.stats[1].stat.name}:${pokemon.stats[1].base_stat}<br> ${pokemon.stats[2].stat.name}:${pokemon.stats[2].base_stat}<br> ${pokemon.stats[3].stat.name}:${pokemon.stats[3].base_stat}<br> ${pokemon.stats[4].stat.name}:${pokemon.stats[4].base_stat} <br> ${pokemon.stats[5].stat.name}:${pokemon.stats[5].base_stat}`
            const pokeCries = document.createElement('div');
            pokeCries.className = "pokeCries";
            pokeCries.innerHTML = `<audio controls src=${pokemon.cries.latest}></audio>`
            const pokeSprits = document.createElement('div');
            pokeSprits.className = "pokeSprits";
            pokeSprits.innerHTML = `<h4>Sprites:</h4>
                    <div class="arrg"><span><h4>Front</h4><img src=${pokemon.sprites.front_default}></span>
                <span><h4>Back</h4><img src=${pokemon.sprites.back_default}></span></div>`
            const pokeMoves = document.createElement('div');
            pokeMoves.className = "pokeMoves";
            const moveList = document.createElement('div');
            moveList.className = "moveListNone";
            moveList.addEventListener('click', () => {
                changeDisability(moveList);
            })

            // moveList.className = "movesList";

            const movesHeadline = document.createElement('h4');
            movesHeadline.innerText = "Moves";

            pokeMoves.appendChild(movesHeadline)

            pokeMoves.appendChild(moveList);

            const firstMoveRow = document.createElement('div');
            firstMoveRow.className = "moveRow"
            firstMoveRow.innerHTML = `<div class="moveName"><h4>Name</h4></div>
                                      <div class="moveLearned"><h4>Level</h4></div>
                                      <div class="moveLearnMethod"><h4>Method</h4></div>`
            moveList.appendChild(firstMoveRow);
            let pokemonMoves = pokemon.moves;
            console.log(pokemonMoves);
            pokemonMoves.forEach((skill) => {
                const moveRow = document.createElement('div');
                moveRow.className = "moveRow";

                const moveName = document.createElement('div');
                moveName.className = "moveName";
                moveName.innerText = skill.move.name;

                const moveLearned = document.createElement('div');
                moveLearned.className = "moveLearned";
                moveLearned.innerText = skill.version_group_details[0].level_learned_at;

                const moveMethod = document.createElement('div');
                moveMethod.className = "moveLearnMethod";
                moveMethod.innerText = skill.version_group_details[0].move_learn_method.name;

                moveRow.appendChild(moveName);
                moveRow.appendChild(moveLearned);
                moveRow.appendChild(moveMethod);
                moveList.appendChild(moveRow);
            })

            const reset = document.createElement('div')
            reset.className = "reset";
            const resetLink = document.createElement('button');
            resetLink.innerText = "Return";
            resetLink.addEventListener('click', () => {
                listBuilder();
            })
            reset.appendChild(resetLink);


            pokeWrapperInfo.className = "pokeWrapperInfo";
            pokeWrapperInfo.appendChild(pokeName2);
            pokeWrapperInfo.appendChild(pokePic);
            pokeWrapperInfo.appendChild(pokeNum);
            pokeWrapperInfo.appendChild(pokeType);
            pokeWrapperInfo.appendChild(PokeWheghiet)
            pokeWrapperInfo.appendChild(pokeStats);
            pokeWrapperInfo.appendChild(pokeCries);
            pokeWrapperInfo.appendChild(pokeSprits);
            pokeWrapperInfo.appendChild(pokeMoves);
            pokeWrapperInfo.appendChild(reset)
            screen.appendChild(pokeWrapperInfo);
        }
    }
    )
}

const rowBuilder = (pokemon) => {
    const pokeWrapper = document.createElement('div');
    pokeWrapper.className = "pokeWrapper";
    const pokePic = document.createElement('div');
    pokePic.className = "pokePic";
    const img = document.createElement('img');
    // img.src = data.sprites.versions["generation-viii"].icons.front_default;
    img.src = pokemon.sprites.other.home.front_default;
    // img.src = data.sprites.other["official-artwork"].front_default;
    const pokeName = document.createElement('div');
    pokeName.className = "pokeName";
    const pokeNameText = document.createElement('button');
    pokeNameText.className = "pokeClick";
    pokeNameText.innerText = nameWithCapitalLetters(pokemon.name);
    pokeNameText.addEventListener('click', (e) => { infoBuilder(e.target.innerText.toLowerCase()) });

    const pokeNum = document.createElement('div');
    pokeNum.className = "pokeNum";
    pokeNum.innerText = makeThreeDigitNumber(pokemon.id)
    const pokeType = document.createElement('div');
    pokeType.className = "pokeType";
    let dataArr = pokemon.types
    pokeType.innerHTML = checkType(dataArr);

    pokePic.appendChild(img);
    pokeWrapper.appendChild(pokePic);
    pokeName.appendChild(pokeNameText);
    pokeWrapper.appendChild(pokeName);
    pokeWrapper.appendChild(pokeNum);
    pokeWrapper.appendChild(pokeType);
    screen.appendChild(pokeWrapper)

}

const listBuilder = (arr) => {
    screen.innerHTML = "";
    const pokeWrapper = document.createElement('div');
    pokeWrapper.className = "pokeWrapper";
    const pokePic = document.createElement('div');
    pokePic.className = "pokePic";
    pokePic.innerHTML = "<h2>Picture</h2>";
    const pokeName = document.createElement('div');
    pokeName.className = "pokeName";
    pokeName.innerHTML = "<h2>Name</h2>";
    const pokeNum = document.createElement('div');
    pokeNum.className = "pokeNum";
    pokeNum.innerHTML = "<h2>Number</h2>";
    const pokeType = document.createElement('div');
    pokeType.className = "pokeType";
    pokeType.innerHTML = "<h2>Type</h2>";

    pokeWrapper.appendChild(pokePic);
    pokeWrapper.appendChild(pokeName);
    pokeWrapper.appendChild(pokeNum);
    pokeWrapper.appendChild(pokeType);
    screen.appendChild(pokeWrapper)
    for (const pokemon of arr) {
        rowBuilder(pokemon);
    }
}

function checkType(arr) {
    if (arr.length == 2) {
        return `<span class="${arr[0].type.name}">${arr[0].type.name}</span><span class="${arr[1].type.name}">${arr[1].type.name}</span>`
    } else {
        return `<span class="${arr[0].type.name}">${arr[0].type.name}</span>`
    }
}



sreachInputByName.addEventListener('keydown', (event) => {
    screen.innerHTML = "";
    reset();
    searchPokemonName(event.target.value.trim());
    listBuilder();
});

sreachInputByNum.addEventListener('keydown', (event) => {
    screen.innerHTML = "";
    reset();
    searchPokemonNum(event.target.value);
    listBuilder();
})

const loaderPage = () => {
    loader.style.display = "none";
}

const changeDisability = (element) => {
    if (element.className === "movesList") {
        element.className = "moveListNone";
    } else {
        element.className = "movesList"
    }
}

export { listBuilder, loaderPage }