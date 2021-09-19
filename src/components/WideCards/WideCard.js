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

      <Link to={routes}>
        <SingleWideCard>
          <h1>{heading}</h1>

          <div>{subheading}</div>
        </SingleWideCard>
      </Link>
    </>
  );
};

export default Widecard;
// Don't forget setting minimum and maximum width
const SingleWideCard = styled.div`
  /* height: 30%; */
  margin-bottom: 2.5rem;
  width: 50vw;
  background-color: #3f3fb4;
  /* #323291 */
  /* #040432 */

  border-radius: 1.2rem 1.2rem 0 0;
  /* padding: 2rem 0 0 0; */
  position: relative;
  /* Check this line */
  /* margin: auto; */
  text-align: center;
  > h1 {
    color: whitesmoke;

    padding: 4rem 0.5rem;
  }
  & > div {
    background-color: #ff80e9;
    text-align: center;
    color: white;
    position: absolute;
    width: 100%;
    /* height: 30%; */
    border-radius: 0 0 0.7rem 0.7rem;
    /* display: flex;
    align-items: center;
    justify-content: center; */

    font-size: 1.5rem;
    color: whitesmoke;
    font-weight: bolder;
    padding: 1rem 0;
  }
  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;
