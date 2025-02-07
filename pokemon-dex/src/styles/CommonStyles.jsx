import { styled, css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const flexColumn = css`
  ${flexCenter}
  flex-direction: column;
`;

export const Container = styled.div`
  ${flexColumn}
  width: ${(props) => props.width || "100%"};
  height: auto;
  margin: 0 auto;
`;

export const Button = styled.button`
  background-color: #c72828;
  color: white;
  border: none;
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #5c1515;
  }
`;

export const Img = styled.img`
  src: ${(props) => props.url};
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "500px"};
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
  padding: 5px 5px;
  background-color: #ffffff;
  transition: transform 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.5rem);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2),
      -5px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;
