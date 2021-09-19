import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { getDatabase, set, ref } from "firebase/database";
import { datab } from "../../firebase";
// import uniqid from "uniqid";

const Journal = () => {
  // rows="4" cols="50"
  const [data, setData] = useState("");
  const [id, setId] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    set(ref(datab, "journals/"), {
      message: data,
    });
    setData("");
    setId((id) => id + 1);
  };
  return (
    <>
      <JournalContainer>
        <form onSubmit={handleClick}>
          <label for="journal">have a guided journal</label>
          {/* <label for="journal" /> */}
          <textarea
            id="journal"
            name="journal"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
          {/* <button> Save</button> */}
          <Button variant="contained" color="secondary" type="submit">
            Save
          </Button>
          <ViewButton>
            <Button variant="contained" color="secondary" type="submit">
              Your Journals
            </Button>
          </ViewButton>
        </form>
      </JournalContainer>
    </>
  );
};

export default Journal;

const Navbar = ``;

const JournalContainer = styled.div`
  /* background-color: #3a3a9f; */
  background-color: #081733;
  /* background-color: black; */

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > form {
    display: flex;
    flex-direction: column;
  }
  > form > label {
    color: whitesmoke;
    font-weight: 400;
    font-size: 1.6rem;
    margin: 1.5rem auto;
    margin-left: -0.8rem;
  }
  > form > textarea {
    background-color: #030317;
    padding: 1.2rem 1rem;
    border: none;
    outline: none;
    height: 60vh;
    width: 50vw;
    overflow: hidden;
    border-radius: 2rem;
    color: whitesmoke;
    font-size: 1rem;
    line-height: 1.8rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    margin-bottom: 1.3rem;
  }
  &:before {
    content: "";
    position: absolute;
    color: whitesmoke;
    top: 0;
    /* left: 8rem; */
    font-weight: 800;
    height: 10%;
    font-size: 2.5rem;
    display: inline-block;
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: #030317;
  }
  &:after {
    content: "Journal";
    position: absolute;
    color: whitesmoke;
    top: 0;
    /* left: 8rem; */
    font-weight: 800;
    font-size: 3rem;
    width: 100%;
    left: 6.5rem;
  }
  button {
    width: 20%;
    /* margin-top: 1rem; */
  }
`;
const ViewButton = styled.div`
  position: absolute;
  right: 5rem;
  top: 1rem;

  > button {
    width: 100%;
  }
`;
