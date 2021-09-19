import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
// Here we will be fetching the books from google books api
const Book = () => {
  const [book, setBook] = useState("");
  const [api, setApi] = useState("AIzaSyCAulFtJZAmOoSFZO_06UHx-k8lwICOTJg");
  const [result, setResult] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { q: book, key: api, maxResults: 40 };
    axios.get("https://www.googleapis.com/books/v1/volumes", { params }).then(
      (results) => {
        setResult(results.data.items);
      }

      // Just look at the api and then analyze the data
    );
  };
  return (
    <>
      <BookData>
        <FormContainer>
          {/* Setting up form to accept responses for the data entered */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter book"
              value={book}
              onChange={(e) => setBook(e.target.value)}
            />
            <br />
            <Button variant="contained" color="secondary" type="submit">
              Search
            </Button>
          </form>
        </FormContainer>
        <Grid>
          {result?.map((res) => {
            return (
              <article key={res.id}>
                {console.log(res)}
                <a href={res.volumeInfo.previewLink} target="_blank">
                  <img
                    src={res.volumeInfo.imageLinks?.thumbnail}
                    alt={res.volumeInfo.title}
                  />
                </a>
              </article>
            );
          })}
        </Grid>
      </BookData>
    </>
  );
};

export default Book;
const BookData = styled.div`
  background-color: #081733;
  min-height: 100vh;
  width: 100%;
  font-style: normal;
`;
const FormContainer = styled.div`
  display: grid;

  /* margin: 1rem 1rem; */
  > form {
    margin: 1rem 1rem;
  }

  input {
    /* margin: 1rem 1rem; */

    width: 50%;
    padding: 0.5rem;
    font-weight: bold;
  }
  button {
    width: 10%;
    padding: 0.2rem;
    margin-top: 0.5rem;
    font-weight: 550;
  }
`;

const Grid = styled.div`
  margin-left: 8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
