import React from "react";
import styled from "styled-components";
import CarouselComponent from "../../components/Carousel/carouselComponent";
import Card from "../../components/Cards/Card";
import Widecard from "../../components/WideCards/WideCard";
function Home() {
  return (
    <div>
      {console.log("Gourab Maghya")}

      <NavContainer>
        <LogoContainer>
          <h1>Project</h1>
        </LogoContainer>
        <NavBar>
          <ul>
            <li>Rescue Session</li>
            <li>Guided Journal</li>
            <li>Learning Paths</li>
          </ul>
        </NavBar>
      </NavContainer>
      <CarouselComponent />

      <LearningPathContainer>
        <h2>Learning path</h2>
        <CardContainer>
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </LearningPathContainer>

      <GuidedJournalContainer>
        <h2>Guided Journal</h2>
        <WidecardContainer>
          <Widecard />
        </WidecardContainer>
        <h2>Rescue Session</h2>
        <WidecardContainer>
          <Widecard />
        </WidecardContainer>
        <h2>Find me a Book</h2>
        <WidecardContainer>
          <Widecard />
        </WidecardContainer>
      </GuidedJournalContainer>
    </div>
  );
}

export default Home;

const GuidedJournalContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  background: #2b2aa2ff;
`;

const WidecardContainer = styled.div`
  /* width: 50%; */
`;
const CardContainer = styled.div`
  height: 400px;
  display: grid;
  background-color: #2b2aa2ff;
  grid-template-columns: repeat(3, 1fr);
`;
const LearningPathContainer = styled.div`
  > h2 {
    background: #2b2aa2ff;
    display: grid;
    justify-items: center;
    color: white;
  }
`;
const NavContainer = styled.div`
  height: 60px;
  background: #2b2aa2ff;
  padding: 30px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 20% 70%;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  color: white;
`;

const NavBar = styled.div`
  background-color: #3d40d3ff;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 15px;
  display: grid;
  height: 60%;
  > ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  > ul li {
    list-style: none;
    color: white;
    display: grid;
    justify-items: center;
    font-weight: 500;
  }
  > ul li:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
`;
