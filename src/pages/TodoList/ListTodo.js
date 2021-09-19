import React from "react";
import styled from "styled-components";
// import CloseIcon from "@material-ui/icons/Close";
// import CloseIcon from "@material-ui/icons/Close";
// import ClearIcon from "@material-ui/icons/Clear";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import DeleteIcon from "@mui/icons-material/Delete";

const ListTodo = ({ todo, removeTodo }) => {
  return (
    <ContainerRightBottom>
      {/* {console.log(todo.id)} */}
      <p>{todo.name}</p>

      <button onClick={() => removeTodo(todo.id)}>
        <span>X</span>
      </button>
    </ContainerRightBottom>
  );
};

export default ListTodo;
const ContainerRightBottom = styled.div`
  border: 1px solid gray;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;

  > p {
    padding-left: 20px;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    color: white;
  }

  > button {
    background-color: red;
    color: white;
    padding: 10px;
    font-weight: lighter;
    margin-top: auto;
    margin-right: 20px;
  }
`;
