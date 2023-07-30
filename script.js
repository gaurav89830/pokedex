document.querySelector("#search").addEventListener("click", getPokemon);

function toLowerCase(string) {
  return string.toLowerCase(name);
}

function getPokemon(e) {
  var name = document.querySelector("#pokemon-name").value;
  name = toLowerCase(name);
  if(name.length == 0){
    return;
  }
  name.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
    
      // document.querySelector(".img-svg").src = data.sprites.other["official-artwork"].front_default;
      document.querySelector(".img-gif").src =
        data.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_default;
      document.querySelector(".pokemon-name").innerHTML = data.name;
      document.querySelector(".pokemon-weight").innerHTML =
        "Weight : " + data.weight;
      document.querySelector(".pokemon-height").innerHTML =
        "Height : " + data.height;
      const abilityNames = data.abilities.map((obj) => obj.ability.name);
      const pTag = document.querySelector(".pokemon-abilities");
      pTag.textContent = abilityNames.join("  ");

      document.querySelector(".secondary-div").classList.add("hidden");
      document.querySelector(".secondary-div").classList.remove("visible");
      document.querySelector(".main-div").classList.remove("hidden");
    })
    .catch((err) => {
      console.log("Pokemon nhi mila", err);
      document.querySelector(".secondary-div").classList.remove("hidden");
      document.querySelector(".secondary-div").classList.add("visible");
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
