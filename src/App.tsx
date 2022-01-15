import React from 'react';

import Calculator from "components/Calculator";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #323232;
  display: flex;
  flex-direction: column;
  min-height: 100vh;  
  font-size: 16px;
  //min-width: 100vw;
`;

function App() {
    return (
        <Container>
            <Calculator />
        </Container>
    );
}

export default App;
