import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Journaltype = ({ heading, route, questions }) => {
  console.log(questions);
  return (
    <>
      <Link to="/journal">
        <Container>
          <h1>{heading}</h1>

          <span>
            <FaChevronRight />
          </span>
        </Container>
      </Link>
    </>
  );
};

export default Journaltype;

const Container = styled.div`
  background-color: #3f3fb4;
  width: 40vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin: 4rem auto;
  border-radius: 1rem;
  padding: 2rem 2rem;
`;
