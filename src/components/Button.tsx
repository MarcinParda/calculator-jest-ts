import React from 'react';
import styled from "styled-components";

type Props = {
    label: string;
}

const StyledButton = styled.button`
    background: #c48900;
    border: none;
    border-radius: .5rem;
    font-size: 1.5rem;
`;

const Button: React.FC<Props> = ({label}) => {
  return (
    <StyledButton>{label}</StyledButton>
  );
}

export default Button;
