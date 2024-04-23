import styled from "styled-components";
import { sliders } from "../data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin: 0 100px;
  height: calc(100vh - 100px);
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid lightgray;
  cursor: pointer;
  opacity: 0.5;
  font-size: 24px;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  transform: translateX(${(props) => props.index * -100}vw);
  transition: all 0.8s ease;
  display: flex;
`;
const Slide = styled.div`
  position: relative;
  width: 100vw;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Button = styled.button`
  width: 150px;
  position: absolute;
  bottom: 20px;
  right: 300px;
  border: none;
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  color: black;
  font-weight: 600;
  font-weight: 14px;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSlider = (direction) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : 2);
    } else {
      setIndex(index < 2 ? index + 1 : 0);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleSlider();
    }, 4000);
  }, [index]);
  
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlider("left")}>
        <RiArrowLeftSLine />
      </Arrow>
      <Wrapper index={index}>
        {sliders.map((s, i) => {
          return (
            <Slide key={i}>
              <ImageContainer>
                <Image src={s.img} />
              </ImageContainer>
              <Button>{s.button}</Button>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlider("right")}>
        <RiArrowRightSLine />
      </Arrow>
    </Container>
  );
};

export default Slider;
