import React from "react";
import styled from "styled-components";
const Card = () => {
  return (
    <>
      <SingleCard>
        <h1>Stress</h1>
      </SingleCard>
    </>
  );
};

export default Card;
const SingleCard = styled.div`
  height: 40vh;
  width: 15vw;
  /* border: 2px solid red; */
  background-color: #3f3fb4;
  position: relative;
  left: 20%;
  top: 10%;
  border-radius: 1.2rem;
  transform: 1s 1s;
  > h1 {
    color: whitesmoke;
    text-align: center;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
