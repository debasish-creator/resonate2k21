import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Widecard = ({ heading, subheading, routes }) => {
  return (
    <>
      {/* <SingleWideCard>
        <h1>{heading}</h1>

        <div>{subheading}</div>
      </SingleWideCard> */}

      <SingleWideCard>
        <h1>{heading}</h1>

        <Link to={routes}>
          <div>{subheading}</div>
        </Link>
      </SingleWideCard>
    </>
  );
};

export default Widecard;
// Don't forget setting minimum and maximum width
const SingleWideCard = styled.div`
  /* height: 30%; */
  
  width: 50%;
  background-color: #3f3fb4;
   /* #323291 */
   /* #040432 */
  /* border: 2px solid red; */
  /* margin-bottom: 2.5rem; */
  border-radius: 1.2rem;
  padding: 4rem 0rem;
  position: relative;
  /* Check this line */
  margin-left:-10rem ;
  text-align: center;
  > h1 {
    color: whitesmoke;
    /* width: 35%; */
    /* margin-left: 1.5rem; */
    /* margin: 1rem 1rem; */
    padding: 1rem 0.5rem;
  
  }
  >div{
    background-color: #ff80e9;
    text-align: center;
    color: white;
    position: absolute;
    width: 100%;
    height: 30%;
    border-radius: 0 0 0.7rem 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1.5rem;
    color: whitesmoke;
    font-weight: bolder;
  }
  &:hover{
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  /* &:after {
    content: " Write a short journal";
    background-color: #ff80e9;
    position: absolute;
    width: 100%;
    height: 25%;
    bottom: 0;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* text-align: center;
    border-radius: 0 0 0.7rem 0.7rem;
    font-size: 1.5rem;
    color: whitesmoke;
    font-weight: bolder;  */
  }
`;
