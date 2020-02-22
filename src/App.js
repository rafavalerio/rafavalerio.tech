import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: rgba(230, 230, 230, 1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(40, 40, 40, 1);
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  background: rgba(255, 255, 255, 1);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px 6px 6px 0;
`;

const Greeting = styled(Container)`
  font-size: 2rem;
  color: rgba(220, 80, 70, 1);
  font-weight: 200;
`;

const Introduction = styled(Container)`
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(80, 80, 80, 1);
`;

function App() {
  return (
    <AppWrapper>
      <Greeting>
        <span role="img" aria-label="Emoji of a man at the computer">
          👨🏻‍💻
        </span>{" "}
        Hi. I'm Rafa.
      </Greeting>
      <Introduction>
        I'm a software developer based in{" "}
        <span role="img" aria-label="Emoji of the Australian flag">
          🇦🇺
        </span>{" "}
        Melbourne - AU currently working at REA Group.
      </Introduction>
    </AppWrapper>
  );
}

export default App;
