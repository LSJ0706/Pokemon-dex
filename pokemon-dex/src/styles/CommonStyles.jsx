import { styled, css } from "styled-components";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const flexColumn = css`
  ${flexCenter}
  flex-direction: column;
`;

export const Container = styled.div`
  ${flexColumn}
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  margin: 0 auto;
`;

export const Button = styled.button`
  background-color: #c72828;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #5c1515;
  }
`;

export const Img = styled.img`
  src: ${(props) => props.url};
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.width || "500px"};
  margin-bottom: 0px;
`;

export const Card = styled.div`
  ${flexColumn}
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "250px"};
  margin: 10px;
  border-radius: 5px;
  border-width: 2px;
  border-style: ${(props) => props.borderstyle};
  padding: 10px 5px;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
