// 포켓몬 Dashboard 추가 로직
const addPokemon = (myPokemons, pokemon) => {
  return [...myPokemons, pokemon];
};
// 포켓몬 중복 체크 로직
const duplicateCheckPokemon = (myPokemons, id) => {
  return myPokemons.some((myPokemon) => myPokemon.id === id);
};
// 포켓몬 Dashboard 삭제 로직
const removePokemon = (myPokemons, id) => {
  return myPokemons.filter((pokemon) => pokemon.id !== id);
};

export { addPokemon, removePokemon, duplicateCheckPokemon };
