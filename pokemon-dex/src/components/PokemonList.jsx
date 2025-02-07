import usePokemon from "../hooks/usePokemon.js";
import styled from "styled-components";
import MOCK_DATA from "../constants/MockData";
import PokemonCard from "./PokemonCard";
import React from "react";

const PokemonListDiv = styled.div`
  display: grid;
  width: 95%;
  height: 100%;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 13rem);
  gap: 1rem;
  place-items: center;
  padding: 20px 10px 0 10px;
  background-color: #f6f6f6;
`;
const PokemonList = () => {
  const { handleAddPokemon } = usePokemon();
  console.log("PokemonList 렌더링 중!");
  return (
    <PokemonListDiv>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          url={pokemon.img_url}
          name={pokemon.korean_name}
          id={pokemon.id}
          onClick={() => handleAddPokemon(pokemon)}
          buttonName="잡기"
        />
      ))}
    </PokemonListDiv>
  );
};

export default React.memo(PokemonList);
