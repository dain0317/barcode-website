import React from "react";
import Main from "./main";
import styled from "styled-components";
import GrabYouGo from "./grabyougo";
import SmartWay from "./smartway";
import MadeItConv from "./madeItConv";
import HowItWorks from "./howItWorks";
import Promotion from "./promotion";

const Home = () => {
  return (
    <StyledHome>
      <Main />
      <GrabYouGo />
      <SmartWay />
      <MadeItConv />
      <HowItWorks />
      <Promotion />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  margin-top: 80px;
`;

export default Home;
