import React from "react";
import styled from "styled-components";
const days = () => {
  //   alert("Enter streak you want to maintain");
  return (
    <>
      <Header>
        <h1>Your Progress</h1>
      </Header>
      <LearningPathContainer>
        <div>
          <h1>Day 1</h1>
        </div>
        <div>Day 2</div>
        <div>Day 3</div>
        <div>Day 1</div>
        <div>Day 4</div>
        <div>Day 5</div>
        <div>Day 6</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
        <div>Day 7</div>
      </LearningPathContainer>
    </>
  );
};

export default days;
const Header = styled.div`
  color: white;
  background-color: #3f3fb4;
  height: 12vh;
  border-radius: 0 0 3rem 3rem;

  > h1 {
    padding: 1rem;
  }
`;

const LearningPathContainer = styled.div`
  display: flex;
  color: white;
  /* justify-content: space-evenly; */
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
  > div {
    font-weight: bolder;
    background-color: #3f3fb4;
    padding: 0.5rem;
    margin: 0 auto;
    border-radius: 1rem;
  }
  > div:hover {
    background-color: yellowgreen;
  }
`;
