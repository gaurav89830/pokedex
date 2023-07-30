document.querySelector("#search").addEventListener("click", getPokemon);

function toLowerCase(string) {
    return string.toLowerCase(name);
}

function getPokemon(e) {
    var name = document.querySelector("#pokemon-name").value;
    name = toLowerCase(name);
    name.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => {
            // document.querySelector(".img-svg").src = data.sprites.other["official-artwork"].front_default;
            document.querySelector(".img-gif").src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
            document.querySelector(".pokemon-name").innerHTML = data.name;
            document.querySelector(".pokemon-weight").innerHTML = "Weight : " + data.weight;
            document.querySelector(".pokemon-height").innerHTML = "Height : " + data.height;
            const abilityNames = data.abilities.map(obj => obj.ability.name);
            const pTag = document.querySelector('.pokemon-abilities');
            pTag.textContent = abilityNames.join('  ');
        })
        .catch((err) => {
            console.log("Pokemon nhi mila", err);
        });
}

const searchInput = document.querySelector("#pokemon-name");
searchInput.focus();

// Search when "Enter" key is pressed
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getPokemon();
    }
});