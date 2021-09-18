import React from "react";
import data from "./data";
import { useState } from "react";
import Score from "./Score";
import { Button } from "@material-ui/core";
const Quizes = () => {
  const [questions, setQuestions] = useState(data);
  const [response, setResponse] = useState("yes");
  const [marks, setMarks] = useState(0);
  const [showresult, setShowresult] = useState(false);
  //   console.log(data);
  function result(option, correct) {
    if (option === correct) setMarks(marks + 1);
  }
  console.log(marks);
  return (
    <>
      {questions.map((que) => {
        const { id, question, options, correct } = que;
        return (
          <article key={id}>
            <h1>{question}</h1>
            <h3 onClick={() => result(options[0], correct)}>{options[0]}</h3>
            <h3 onClick={() => result(options[1], correct)}>{options[1]}</h3>
            {/* <h4>{correct}</h4> */}
          </article>
        );
      })}
      <Button onClick={() => setShowresult(!showresult)}>Submit</Button>

      {showresult && <Score marks={marks} />}
    </>
  );
};

export default Quizes;
