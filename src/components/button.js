import React from "react";
import styled from "styled-components";

const Button = ({ children, color = "#FF8C62" }) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};
const StyledButton = styled.button`
  background: ${(p) => p.color};
  padding: 20px 50px;
  outline: none;
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
`;

export default Button;
