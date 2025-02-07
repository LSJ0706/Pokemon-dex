import { useState, createContext } from "react";
import {
  addPokemon,
  duplicateCheckPokemon,
  removePokemon,
} from "../utils/pokemon";
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [myPokemons, setMyPokemons] = useState([]);
  console.log("PokemonProvider 재실행");

  const handleAddPokemon = (pokemon) => {
    if (duplicateCheckPokemon(myPokemons, pokemon.id)) {
      return alert("중복된 포켓몬은 잡을 수 없어!");
    }
    if (myPokemons.length < 6) {
      setMyPokemons((prev) => addPokemon(prev, pokemon));
    } else {
      alert("포켓몬은 최대 6마리만 잡을 수 있어!");
    }
  };

  const handleRemovePokemon = (pokemon) => {
    setMyPokemons((prev) => removePokemon(prev, pokemon.id));
    alert(`바이 바이 ${pokemon.korean_name}!`);
  };

  return (
    <PokemonContext.Provider
      value={{ myPokemons, handleAddPokemon, handleRemovePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
