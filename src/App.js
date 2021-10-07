import React from "react";
import styled, { keyframes } from "styled-components";

import ProfilePic from './raf.jpg';

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
  background-color: #9a275a;
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
  border: 5px solid #FFF;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation: ${float} 3s ease-out infinite;
`;

const Title = styled.h1`
  color: #e36588;
  margin: 15px 0 0;
  font-size: 3em;
`;

const SubTitle = styled.h2`
  color: rgb(240, 243, 189);
  margin: 0;
  font-weight: 400;
`;

const Content = styled.div`
  background: #e36588;
  padding: 0.5em 1em;
  margin: 0.6em;
  border-radius: 25px;
  color: #9a275a;
  font-size: 1em;
  font-weight: 600;
`;

function App() {
  return (
    <AppWrapper>
      <Photo></Photo>
      <Title>
        Rafael Valerio
      </Title>
      <SubTitle>
        Lead Developer
      </SubTitle>
      <Content>REA / Bunnings / BuildPass</Content>
    </AppWrapper>
  );
}

export default App;
