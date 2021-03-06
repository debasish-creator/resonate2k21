import React from "react";
import styled from "styled-components";
import WideCard from "./WideCard";
import { Link } from "react-router-dom";
const Widecards = ({ heading, subheading, routes, img }) => {
  return (
    <>
      <WidecardContainer>
        <WideCard
          heading={heading}
          subheading={subheading}
          routes={routes}
          img={img}
        />
        {/* <WideCard /> */}
      </WidecardContainer>
    </>
  );
};

export default Widecards;

const WidecardContainer = styled.div`
  /* min-height: 60vh; */
  height: fit-content;
  padding: 5rem 0;
  width: 100vw;

  background-color: #17144bff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
