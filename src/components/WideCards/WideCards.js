import React from "react";
import styled from "styled-components";
import WideCard from "./WideCard";
import { Link } from "react-router-dom";
const Widecards = () => {
  return (
    <>
      <WidecardContainer>
        <Link to="/journal">
          <WideCard />
          {/* <WideCard /> */}
        </Link>
      </WidecardContainer>
    </>
  );
};

export default Widecards;

const WidecardContainer = styled.div`
  height: 50vh;
  width: 100vw;

  background-color: #081733;
  display: flex;
  align-items: center;
  justify-content: center;
  /* display: grid;
  place-items: center; */
  flex-direction: column;
`;
