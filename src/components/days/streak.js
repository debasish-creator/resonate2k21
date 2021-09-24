import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import { Link } from "react-router-dom";
const streak = () => {
  return (
    <>
      <StreakContainer>
        <h1>Enter rescue session duration</h1>
        <Cards>
          <Card heading={`7 days`} />

          <Card heading={`15 days`} />
          <Card heading={`30 days`} />
        </Cards>
      </StreakContainer>
    </>
  );
};

export default streak;

const StreakContainer = styled.div`
  > h1 {
    color: white;
    display: flex;
    justify-content: center;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10rem;
`;
