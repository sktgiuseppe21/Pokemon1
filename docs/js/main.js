const input = document.querySelector("#pokemon");
const boton = document.querySelector("#boton");
const div = document.querySelector(".pokemon-container");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    Pokemon(input.value.toLowerCase());
});


const Pokemon = (pokemon) =>{
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(resp => resp.json())
    .then(data => crearPokemon(data))
    .catch(error => swal("Error", error, "error")) 
}


const crearPokemon = (pokemon) => {
    const img = document.createElement("img")
    img.src = pokemon.sprites.front_default;

    const nombre = document.createElement("h3");
    nombre.textContent = pokemon.name;
    div.appendChild(img);
    div.appendChild(nombre);

    let pability = document.createElement("label");
    pokemon.abilities.forEach(element => {
        pability = document.createElement("label");
        pability.setAttribute("class",  "abilities");
        pability.textContent = element.ability.name;
        div.appendChild(pability);
        
    
    });
  
    let mmovement = document.createElement("label");
    pokemon.moves.forEach(element => {
        mmovement = document.createElement("label");
        mmovement.setAttribute("class",  "movement");
        mmovement.textContent = element.move.name;
        div.appendChild(mmovement);
    });

}

