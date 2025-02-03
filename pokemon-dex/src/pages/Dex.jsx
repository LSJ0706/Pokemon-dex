import { Container } from "../styles/CommonStyles";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <Container>
      <Dashboard />
      <PokemonList />
      <div>현재 페이지 : Dex</div>
    </Container>
  );
};

export default Dex;
