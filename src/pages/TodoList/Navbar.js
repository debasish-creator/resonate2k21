import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <NavbarContainer>
      <h2>My To-Do-List</h2>
    </NavbarContainer>
  );
};

export default Navbar;
const NavbarContainer = styled.div`
  background-color: #e2ebd5;
  display: flex;
  margin: 20px 10rem;
  justify-content: center;
  > h2 {
    font-weight: 400;
  }
`;
