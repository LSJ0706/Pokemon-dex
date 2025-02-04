import { Container } from "../styles/CommonStyles";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import {
  addPokemon,
  duplicateCheckPokemon,
  removePokemon,
} from "../utils/pokemon";
import { useState } from "react";

const Dex = () => {
  const [myPokemons, setMyPokemons] = useState([]);

  const handleAddPokemon = (pokemon) => {
    if (duplicateCheckPokemon(myPokemons, pokemon.id)) {
      return alert("중복된 포켓몬은 잡을 수 없어!");
    }
    if (myPokemons.length < 6) {
      setMyPokemons(addPokemon(myPokemons, pokemon));
    } else {
      alert("포켓몬은 최대 6마리만 잡을 수 있어!");
    }
  };

  const handleRemovePokemon = (pokemon) => {
    setMyPokemons(removePokemon(myPokemons, pokemon.id));
    alert(`바이 바이 ${pokemon.korean_name}!`);
  };

  return (
    <Container>
      <Dashboard myPokemons={myPokemons} removePokemon={handleRemovePokemon} />
      <PokemonList addPokemon={handleAddPokemon} />
    </Container>
  );
};

export default Dex;
