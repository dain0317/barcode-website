import React from "react";
import styled from "styled-components";
import HowItWorks from "./howItWorks";
import Main from "./main";
import Store from "./store";

const Service = () => {
  return (
    <StyledService>
      <Main />
      <HowItWorks />
      <Store />
    </StyledService>
  );
};

const StyledService = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

export default Service;
