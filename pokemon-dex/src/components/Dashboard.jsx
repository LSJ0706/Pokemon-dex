import { Card, Img, flexColumn } from "../styles/CommonStyles";
import PokemonCard from "../components/PokemonCard";
import pokeball from "../assets/pokeball.png";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removePokemonAction } from "../redux/modules/pokemonSlice";

const DashboardDiv = styled.div`
  ${flexColumn}
  width: 95%;
`;
const DashboardList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-width: 600px;
  margin-bottom: 20px;
  height: 250px;
  padding: 20px 0;
`;
const H2 = styled.h2`
  margin: 10px 0px 10px 0px;
  color: red;
`;

const Dashboard = () => {
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);
  const dispatch = useDispatch();

  const handleRemovePokemon = (pokemon) => {
    dispatch(removePokemonAction(pokemon));
  };
  return (
    <DashboardDiv>
      <H2>나만의 포켓몬</H2>
      <DashboardList>
        {[...Array(6)].map((_, idx) =>
          !myPokemons[idx] ? (
            <Card key={"id" + idx} width="150px" height="150px">
              <Img
                src={pokeball}
                alt="포켓볼 이미지"
                width="100px"
                height="100px"
                key={idx}
              />
            </Card>
          ) : (
            <PokemonCard
              key={myPokemons[idx].id}
              url={myPokemons[idx].img_url}
              name={myPokemons[idx].korean_name}
              id={myPokemons[idx].id}
              buttonName="놓아주기"
              onClick={() => handleRemovePokemon(myPokemons[idx])}
            />
          )
        )}
      </DashboardList>
    </DashboardDiv>
  );
};

export default Dashboard;
