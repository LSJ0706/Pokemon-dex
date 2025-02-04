import { Card, Img, Container } from "../styles/CommonStyles";
import pokeball from "../assets/pokeball.png";
import styled from "styled-components";

const MypokemonListDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 95%;
  min-width: 500px;
  background-color: #f6f6f6;
`;

const H2 = styled.h2`
  margin: 10px 0px 10px 0px;
  color: red;
`;

const Dashboard = () => {
  const myPokemons = new Array(6).fill(null);
  return (
    <Container height="40vh">
      <H2>나만의 포켓몬</H2>
      <MypokemonListDiv>
        {myPokemons.map((v, idx) =>
          !v ? (
            <Card key={idx} width="80px" height="70px" borderStyle="dotted">
              <Img
                src={pokeball}
                alt="포켓볼 이미지"
                width="50px"
                height="50px"
                key={idx}
              />
            </Card>
          ) : (
            <Card key={v.pokemon.id} width="150px" height="200px" />
          )
        )}
      </MypokemonListDiv>
    </Container>
  );
};

export default Dashboard;
