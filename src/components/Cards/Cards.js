import React from "react";
import styled from "styled-components";
import Card from "./Card";
const Cards = () => {
  return (
    <>
      <CardsContainer>
        <Card />
      </CardsContainer>
    </>
  );
};

export default Cards;

const CardsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: blue; */
  /* #3a3a9f */
  /* #3f3fb4 */
  background-color: #081733;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
