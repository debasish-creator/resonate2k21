import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Widecard = () => {
  return (
    <>
      <SingleWideCard>
        <h1>Reflect on where you are at</h1>
      </SingleWideCard>
    </>
  );
};

export default Widecard;
// Don't forget setting minimum and maximum width
const SingleWideCard = styled.div`
  height: 30%;
  width: 60%;
  background-color: #3f3fb4;
  /* border: 2px solid red; */
  margin-bottom: 2.5rem;
  border-radius: 1.2rem;
  position: relative;
  > h1 {
    color: whitesmoke;
    width: 35%;
    margin-left: 1.5rem;
  }
  &:after {
    content: " Write a short journal";
    background-color: #ff80e9;
    position: absolute;
    width: 100%;
    height: 25%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 0 0 0.7rem 0.7rem;
    font-size: 1.5rem;
    color: whitesmoke;
    font-weight: bolder;
  }
`;
