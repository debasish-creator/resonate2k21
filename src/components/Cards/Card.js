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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
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
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.01);
  }
`;
