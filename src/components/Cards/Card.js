import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = ({ heading, route }) => {
  return (
    <>
      <Link to={route}>
        <SingleCard>
          <h1>{heading}</h1>
        </SingleCard>
      </Link>
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
  margin-top: 2rem;
  > h1 {
    color: whitesmoke;
    text-align: center;
    padding-top: 1rem;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.01);
  }
`;
