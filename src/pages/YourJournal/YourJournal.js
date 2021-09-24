import React, { useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { dbRef } from "../../firebase";
import { useEffect } from "react";
import YourJournalCard from "../../components/Cards/YourJournalCard";
import styled from "styled-components";

const YourJournal = () => {
  const [data, setData] = useState([]);
  const timeS = new Date();
  console.log(timeS);
  useEffect(() => {
    get(child(dbRef, `journals/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(Object.values(snapshot.val()));
          // console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Container>
      <NavBar>
        <h1>Your Journal</h1>
      </NavBar>
      <YourJournalContainer>
        {data.map((journalData) => {
          const { id, message } = journalData;
          return (
            <article key={id}>
              <YourJournalCard id={id} message={message} />;
            </article>
          );
        })}
      </YourJournalContainer>
    </Container>
  );
};

export default YourJournal;

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: #17144bff;
`;

const NavBar = styled.div`
  padding: 1em;
  height: 80px;
  > h1 {
    color: white;
  }
`;
const YourJournalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;
`;
