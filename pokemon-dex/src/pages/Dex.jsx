import { Container } from "../styles/CommonStyles";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonProvider } from "../context/PokemonProvider";
const Dex = () => {
  return (
    <Container>
      <PokemonProvider>
        <Dashboard />
        <PokemonList />
      </PokemonProvider>
    </Container>
  );
};

export default Dex;
