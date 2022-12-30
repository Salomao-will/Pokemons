async function fillPokemonData(name, order) {
  // Não mudar - Esta variável contém a informação sobre os Pokemons,
  // Que você vai usar para completar as atividades
  const pokemonData = await getPokemonData(name);

  //Atividades

  // 1) Insira a imagem do pokemon dentro de cada card. Para isso,
  // você pode explorar os elementos HTML usando o Dev Tools do seu navegador

  // 2) Utilizando os stats de cada pokemon, você deve encher uma das
  // barras que aparecem no card. Dependendo da quantidade de cada atributo
  // você terá de decidir a cor da barra em cada caso:
  // Se a habilidade é menor a 35, a barra será de color vermelha
  // Se a habilidade é maior ou igual a 35, mas menor que 70, a barra será amarela
  // Se a habilidade é igual ou maior a 70, a barra será de cor verde.
  // Você deve utilizar as classes que estão no arquivo styles.css

  //Escreva seu código abaixo dentro da função:
}

//Lista de Pokemons - Você pode alterar para os seus favoritos!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  fillPokemonData(pokemon, pokemonNumber);
});