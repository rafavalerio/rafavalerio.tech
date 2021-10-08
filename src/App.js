import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "./variables";

import ProfilePic from "./raf.jpg";

const float = keyframes`
  0% {
		transform: translatey(0px);
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.4);
	}
	50% {
		transform: translatey(-10px);
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.2);
	}
	100% {
		transform: translatey(0px);
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.4);
	}
`;

const AppWrapper = styled.div`
  background-color: ${COLORS.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.div`
  background-image: url(${ProfilePic});
  background-position: center;
  background-size: contain;
  border: 5px solid #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation: ${float} 3s ease-out infinite;
`;

const Title = styled.h1`
  color: ${COLORS.secondary};
  margin: 15px 0 0;
  font-size: 3em;
  font-weight: 400;
`;

const SubTitle = styled.h2`
  color: ${COLORS.primaryVariant};
  margin: 0;
  font-weight: 400;
`;

const Content = styled.div`
  display: flex;
  margin: 1em;
`;

const Pill = styled.span`
  background: ${COLORS.accent};
  padding: 0.5em 1em;
  margin: 0.2em;
  border-radius: 25px;
  color: #fff;
  font-weight: 600;
`;

function App() {
  return (
    <AppWrapper>
      <Photo></Photo>
      <Title>Rafael Valerio</Title>
      <SubTitle>Lead Developer</SubTitle>
      <Content>
        <Pill>REA</Pill>
        <Pill>Bunnings</Pill>
        <Pill>BuildPass</Pill>
      </Content>
    </AppWrapper>
  );
}

export default App;
