// NO TOCAR
const statsNames = {
  hp: "hp",
  attack: "ataque",
  defense: "defesa",
  speed: "velocidade",
};

// NO TOCAR
function createPokemonCard(pokemon, order) {
  const body = document.querySelector("main");
  const cardContainer = document.createElement("div");
  cardContainer.className = "card";

  cardContainer.innerHTML = `
    <img
      src="..."
      class="card-img-top"
      alt="pokemon-${order}"
      id="pokemon-image-${order}"
    />
    <div class="card-body">
      <h5 class="card-title" id="pokemon-name-${order}">${pokemon.toUpperCase()}</h5>
      <p class="card-text">Skills</p>
      <span>HP</>
      <div class="bar-container">
        <div id="hp-bar-${order}"></div>
        <span id="hp-amount-${order}"></span>
      </div>
      <span>Ataque</>
      <div class="bar-container">
        <div id="attack-bar-${order}"></div>
        <span id="attack-amount-${order}"></span>
      </div>
      <span>Defesa</>
      <div class="bar-container">
        <div id="defense-bar-${order}"></div>
        <span id="defence-amount-${order}"></span>
      </div>
      <span>Velocidade</>
      <div class="bar-container">
        <div id="speed-bar-${order}"></div>
        <span id="speed-amount-${order}"></span>
      </div>
    </div>
  `;

  body.appendChild(cardContainer);
}

// NO TOCAR
async function getPokemonData(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const json = await response.json();
  const parsedData = {
    stats: json.stats
      .map((stat) => ({
        name: statsNames[stat.stat.name],
        amount: stat["base_stat"],
      }))
      .filter((stat) => stat.name),
    imagen: json.sprites["front_default"],
  };

  return parsedData;
}