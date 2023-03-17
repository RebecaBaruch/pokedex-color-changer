const pokedex = document.querySelectorAll(".pokemon");
const body = document.querySelector(".body");

//for each pokemon in the div 
pokedex.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    removeHighlight();
    pokemon.classList.add("highlight");

    const pokeName = ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];
    const pokeColor = ['rgb(255, 255, 80)', 'rgb(110, 255, 135)', 'rgb(255, 194, 89)', 'rgb(110, 197, 255)'];

    //change the page background color
    pokeName.forEach((name) => {
      if (pokemon.classList.contains(name)) {
        let nameIndex = pokeName.indexOf(name);
        body.style.backgroundColor = pokeColor[nameIndex];
      }
    });

  });
});

//remove highlight style effect 
const removeHighlight = () => {
  pokedex.forEach((pokemon) => {

    if(pokemon.classList.contains('highlight')) pokemon.classList.remove("highlight");

  });
};
