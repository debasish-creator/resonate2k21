import React from "react";
import styled from "styled-components";
import WideCard from "./WideCard";
import { Link } from "react-router-dom";
const Widecards = ({ heading, subheading, routes }) => {
  return (
    <>
      <WidecardContainer>
        <WideCard heading={heading} subheading={subheading} routes={routes} />
        {/* <WideCard /> */}
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
