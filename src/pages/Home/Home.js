import React from "react";
import styled from "styled-components";
import CarouselComponent from "../../components/Carousel/carouselComponent";
import Card from "../../components/Cards/Card";
import Widecards from "../../components/WideCards/WideCards";
import Widecarddata from "./Widecarddata";
import { useState } from "react";
import { display } from "@mui/system";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
function Home() {
  const [data2, setData2] = useState(Widecarddata);
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
        <AudioPlayerContainer>
          <AudioPlayer />
        </AudioPlayerContainer>
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
        {data2.map((data) => {
          const { h, heading, subheading, routes, id } = data;
          return (
            <article key={id}>
              <h1>{h}</h1>
              <WidecardContainer>
                <Widecards
                  heading={heading}
                  subheading={subheading}
                  routes={routes}
                />
              </WidecardContainer>
            </article>
          );
        })}
      </GuidedJournalContainer>
    </div>
  );
}

export default Home;
const AudioPlayerContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const GuidedJournalContainer = styled.div`
  /* display: grid;
  justify-items: center; */
  width: 100%;
  background: #2b2aa2ff;
  color: white;
  text-align: center;
  > article > h1 {
    font-size: 3rem;
    padding: 2rem 0;
  }
`;

const WidecardContainer = styled.div`
  /* width: 50%; */
`;
const CardContainer = styled.div`
  height: 400px;
  display: grid;
  background-color: #323291;
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
  height: 80px;
  background: #2b2aa2ff;
  padding: 20px;

  display: grid;
  grid-template-columns: 20% 70% 10%;
  align-items: center;
  font-weight: 600;
  background-color: #081733;
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
  height: 100%;
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
    font-weight: 800;
  }
  > ul li:hover {
    cursor: pointer;
    /* background-color: rgba(0, 0, 0, 0.3); */
    border-radius: 20px;
    transform: scale(1.1);
  }
`;
