import { Container } from "../styles/CommonStyles";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <Container>
      <Dashboard />
      <PokemonList />
    </Container>
  );
};

export default Dex;
