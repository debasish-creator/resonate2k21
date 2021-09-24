import React from "react";
import styled from "styled-components";

const YourJournalCard = ({ id, message }) => {
  return (
    <Container>
      <h2>{message}</h2>
    </Container>
  );
};

export default YourJournalCard;

const Container = styled.div`
  height: 100px;
  width: 80vw;
  background: #20165bff;
  color: white;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
`;
