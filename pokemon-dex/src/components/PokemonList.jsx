import MOCK_DATA from "../constants/MockData";
import PokemonCard from "./PokemonCard";
const PokemonList = () => {
  return (
    <ul>
      {MOCK_DATA.map((pokemon, idx) => (
        <li key={idx}>
          <PokemonCard
            url={pokemon.img_url}
            name={pokemon.korean_name}
            id={pokemon.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
