import React from "react";
import styled from "styled-components";
import WideCard from "./WideCard";
const Widecards = () => {
  return (
    <>
      <WidecardContainer>
        <WideCard />
        <WideCard />
      </WidecardContainer>
    </>
  );
};

export default Widecards;

const WidecardContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: #3a3a9f;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
