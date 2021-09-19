import React from "react";
import { Carousel } from "react-carousel-minimal";
import styled from "styled-components";
import img from "./img1.jpg";

const data = [
  {
    image:
      "https://res.cloudinary.com/dfftvyqha/image/upload/v1632055392/rect833_y1bvhr.png",
    // caption: "San Francisco",
  },
  {
    image:
      "https://res.cloudinary.com/dfftvyqha/image/upload/v1632055453/rect867_j9g6vo.png",
    // caption: "Scotland",
  },
  {
    image:
      "https://res.cloudinary.com/dfftvyqha/image/upload/v1632055497/rect5090_tkxjrx.png",
  },
];
function carouselComponent() {
  return (
    <Container>
      <CarouselContainer>
        <Carousel
          data={data}
          width="100%"
          radius="40px"
          dots={true}
          time={6000}
          automatic={true}
        />
      </CarouselContainer>
    </Container>
  );
}

export default carouselComponent;

const Container = styled.div`
  height: 450px;
  width: 100vw;

  background: #17144bff;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const CarouselContainer = styled.div`
  display: grid;
  align-items: center;
  width: 80vw;
`;
