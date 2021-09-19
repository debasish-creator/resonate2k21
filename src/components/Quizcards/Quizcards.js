import { Checkbox } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const Quizcards = ({ question, result, correct, options }) => {
  return (
    <>
      <QuizCardsContainer>
        <h1>{question}</h1>
        <CheckboxContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => result(options[0], correct)}
          >
            {options[0]}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            // onClick={() => setShowresult(!showresult)}
            onClick={() => result(options[1], correct)}
          >
            {options[1]}
          </Button>
        </CheckboxContainer>
      </QuizCardsContainer>
    </>
  );
};

export default Quizcards;

const QuizCardsContainer = styled.div`
  /* height: 30vh; */
  padding: 5rem 0.5rem;
  padding-bottom: 2rem;
  background-color: #3d40d3ff;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 1.2rem;
  margin-top: 1.5rem;

  > h1 {
    width: 80%;
  }
`;

const CheckboxContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rem;
  > button {
    /* margin: 0 10rem; */
    margin-top: 2rem;
    font-weight: 700;
  }
  > button:first-child {
    background-color: green;
  }
`;
