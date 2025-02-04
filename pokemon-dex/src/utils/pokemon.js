const addPokemon = (myPokemons, pokemon) => {
  return [...myPokemons, pokemon];
};

const duplicateCheckPokemon = (myPokemons, id) => {
  return myPokemons.some((myPokemon) => myPokemon.id === id);
};

const removePokemon = (myPokemons, id) => {
  return myPokemons.filter((pokemon) => pokemon.id !== id);
};

export { addPokemon, removePokemon, duplicateCheckPokemon };
