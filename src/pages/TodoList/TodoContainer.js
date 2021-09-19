import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import ListTodos from "./ListTodos";
const TodoContainer = () => {
  // Initially todo has no value
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();
  let c = Math.random();
  const addTodo = (e) => {
    // The below line returns an object
    const names = todoRef.current.value;
    if (names === "") return;
    setTodos((lastTodo) => {
      // To store the previous values of the todolist
      return [...lastTodo, { id: ++c, name: names, complete: false }];
    });
    // In order to take in new values
    // console.log(todos);

    todoRef.current.value = null;
  };
  const clearTodos = () => {
    setTodos([]);
    // console.log(todos);
  };
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <>
      <Cover>
        <Container>
          <ContainerLeft>
            <h3>Add New Task:</h3>

            <input ref={todoRef} placeholder="New task" />
            <ContainerLeftButton>
              <Button variant="contained" color="secondary" onClick={addTodo}>
                Add
              </Button>
              <Button variant="contained" color="primary" onClick={clearTodos}>
                Clear All !
              </Button>
            </ContainerLeftButton>
          </ContainerLeft>

          <ContainerRight>
            <nav>
              <h3>My Task List</h3>
            </nav>

            <ListTodos todos={todos} removeTodo={removeTodo} />

            {/* <ContainerRightBottom> */}
            {/* From here we will send the data to another container */}
            {/* <ListTodos todos={todos} />
          <button>
            <CloseIcon />
          </button>
        </ContainerRightBottom> */}
          </ContainerRight>
        </Container>
        <Bottom>
          <h2>{todos.length} tasks left</h2>
        </Bottom>
      </Cover>
    </>
  );
};

export default TodoContainer;
const Cover = styled.div`
  /* background-color: white; */
  background-color: #17144bff;
  height: 100vh;
  width: 100vw;
  /* margin-top: 5rem; */
`;

const Container = styled.div`
  display: flex;
  padding: 2rem;
  /* background-color: black;
  height: 100vh;
  width: 100vw; */
  font-weight: bold;
`;
const ContainerLeft = styled.div`
  flex: 0.4;
  /* background-color: black; */

  /* align-items: center; */
  margin-left: 10rem;
  justify-content: center;
  > input {
    width: 60%;
    height: 25px;
    /* border: none; */
    outline: none;
    border: 0.1px solid gray;
    margin-top: 7px;
    font-weight: bold;
  }
  > h3 {
    color: white;
  }
`;

const ContainerLeftButton = styled.div`
  display: flex;
  button {
    margin-top: 10px;
    background-color: #e11a1a;
    font-weight: 520;
  }
  button:first-child {
    margin-right: 25%;
    background-color: green;
  }
`;

const ContainerRight = styled.div`
  flex: 0.6;
  margin-right: 10rem;
  > nav {
    background-color: #4161d7;
    color: white;
    height: 40px;
    text-align: center;
  }
  > nav > h3 {
    font-weight: 400;
    padding-top: 0.5rem;
  }
`;

const ContainerRightBottom = styled.div`
  border: 1px solid gray;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  color: black;
  position: relative;
  margin: 50px 0;
  margin-left: 47%;
  > h2 {
    color: white;
  }
`;
