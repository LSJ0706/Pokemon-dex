import { Card, Img } from "../styles/CommonStyles";
import PokemonCard from "../components/PokemonCard";
import pokeball from "../assets/pokeball.png";
import styled from "styled-components";

const DashboardDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 95%;
  min-width: 500px;
  background-color: #f6f6f6;
`;
const DashboardList = styled.div`
  display: flex;
`;

const H2 = styled.h2`
  margin: 10px 0px 10px 0px;
  color: red;
`;
const Dashboard = ({ myPokemons }) => {
  console.log(myPokemons);
  return (
    <DashboardDiv>
      <H2>나만의 포켓몬</H2>
      <DashboardList>
        {[...Array(6)].map((_, idx) =>
          !myPokemons[idx] ? (
            <Card key={idx + 6} width="80px" height="70px" borderstyle="dotted">
              <Img
                src={pokeball}
                alt="포켓볼 이미지"
                width="50px"
                height="50px"
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
            />
          )
        )}
      </DashboardList>
    </DashboardDiv>
  );
};

export default Dashboard;
