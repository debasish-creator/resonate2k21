import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Quotes = () => {
  const url = " https://api.quotable.io/random";
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.author);
      setQuote(data.content);
      setAuthor(data.author);
    } catch (e) {
      console.log("Error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <QuoteContainer>
        <div>
          <h1>"{quote}"</h1>
        </div>
        <div>
          <h3>{author}</h3>
        </div>
        <br />

        <button onClick={fetchData}>Get inspired</button>
      </QuoteContainer>
    </>
  );
};

export default Quotes;

const QuoteContainer = styled.div`
  background-color: #081733;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* line-height: 3.5em; */
  > div > h1 {
    margin: 0 auto;
    width: 80%;
  }
  > button {
    background: transparent;
    border-color: transparent;
    height: 2rem;
    width: 6rem;
    background: #583bf7;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    border-radius: 10%;
    color: whitesmoke;
    cursor: pointer;
    /* margin-left: 1rem; */
    /* align-self: center; */
    min-width: 2rem;
  }
  > button:hover {
    background-color: black;
  }
`;
