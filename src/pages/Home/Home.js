import React from "react";
import styled from "styled-components";
import CarouselComponent from "../../components/Carousel/carouselComponent";
import Card from "../../components/Cards/Card";
import Cards from "../../components/Cards/Cards";
import Widecards from "../../components/WideCards/WideCards";
import Widecarddata from "./Widecarddata";
import { useState } from "react";
import { display } from "@mui/system";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { Link } from "react-router-dom";
import data from "./data";
import learndata from "./learningData";
import Journaltype from "../../components/Journal/Journaltype";
import journaldata from "./journaldata";
function Home() {
  const [learningData, setLearningData] = useState(learndata);
  const [data1, setData1] = useState(data);
  const [data2, setData2] = useState(Widecarddata);
  const [journal, setJournal] = useState(journaldata);
  return (
    <div>
      {console.log("Gourab Maghya")}

      <NavContainer>
        <LogoContainer>
          <h1>mentical</h1>
        </LogoContainer>
        <NavBar>
          <ul>
            <li>Rescue Session</li>
            <Link to="/journal">
              {" "}
              <li>Guided Journal</li>
            </Link>
            <li>Learning Paths</li>
          </ul>
        </NavBar>
        <AudioPlayerContainer>
          <AudioPlayer />
        </AudioPlayerContainer>
      </NavContainer>
      <CarouselComponent />
      <Mood>
        <div>10</div>
        <div>8</div>
        <div>6</div>
        <div>4</div>
        <div>2</div>
      </Mood>
      <LearningPathContainer>
        <h2>Learning Paths</h2>
        <CardContainer>
          {/* <Card />
          <Card />
          <Card /> */}
          {learningData.map((res) => {
            const { id, heading, route, img } = res;
            return (
              <article key={id}>
                <Card heading={heading} route={route} img={img} />
              </article>
            );
          })}
        </CardContainer>
      </LearningPathContainer>
      <LearningPathContainer>
        <h2>Guided Journal</h2>
        <GuidedJournal>
          {journal.map((data) => {
            const { id, heading, routes, questions, route } = data;
            return (
              <article key={id}>
                <Journaltype
                  heading={heading}
                  questions={questions}
                  route={route}
                />
              </article>
            );
          })}
          {/* <Journaltype />
          <Journaltype />
          <Journaltype />
          <Journaltype /> */}
        </GuidedJournal>
        <h2>Productivity tools</h2>
        <CardContainer>
          {/* <Card />
          <Card />
          <Card /> */}
          {data1.map((res) => {
            const { id, heading, route, img } = res;
            return (
              <article key={id}>
                <Card heading={heading} route={route} img={img} />
              </article>
            );
          })}
        </CardContainer>
      </LearningPathContainer>

      <GuidedJournalContainer>
        {data2.map((data) => {
          const { h, heading, subheading, routes, id, img } = data;
          return (
            <article key={id}>
              <h1>{h}</h1>
              <WidecardContainer>
                <Widecards
                  heading={heading}
                  subheading={subheading}
                  routes={routes}
                  img={img}
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
  background: #17144bff;
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
  height: 100%;
  display: grid;
  background-color: #17144bff;
  grid-template-columns: repeat(3, 1fr);
`;
const LearningPathContainer = styled.div`
  margin-bottom: 5rem;
  > h2 {
    background: #17144bff;
    display: grid;
    justify-items: center;
    color: white;
    font-size: 2.5rem;
    padding: 2rem;
  }
`;
const NavContainer = styled.div`
  height: 80px;
  padding: 20px;

  display: grid;
  grid-template-columns: 20% 70% 10%;
  align-items: center;
  font-weight: 600;
  background-color: #17144bff;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  color: white;
`;

const NavBar = styled.div`
  background-color: #20165bff;
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

const Mood = styled.div`
  color: white;
  display: flex;

  background-color: #3f3fb4;
  border-radius: 2rem;
  width: 50vw;
  margin: 1rem auto;
  padding: 0.5rem;
  > div {
    margin: 0 auto;
  }
`;

const GuidedJournal = styled.div`
  height: 100%;
`;
