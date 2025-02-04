const addPokemon = (myPokemons, pokemon) => {
  return [...myPokemons, pokemon];
};

const duplicateCheckPokemon = (myPokemons, id) => {
  return myPokemons.some((myPokemon) => myPokemon.id === id);
};

export { addPokemon, duplicateCheckPokemon };
