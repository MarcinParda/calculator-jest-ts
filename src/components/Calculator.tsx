import React from 'react';
import styled from "styled-components";
import Button from "components/Button";

const Container = styled.div`
    background-color: #323232;
    flex: 1;
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
`;

const Calculator: React.FC = () => {
  return (
  <Container>
      <Grid>
          <Button label="9" />
          <Button label="8" />
          <Button label="7" />
          <Button label="6" />
          <Button label="5" />
          <Button label="4" />
          <Button label="3" />
          <Button label="2" />
          <Button label="1" />
      </Grid>
  </Container>
  );
}

export default Calculator;
