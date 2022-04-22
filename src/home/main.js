import React from "react";
import styled from "styled-components";
import Button from "../components/button";

const Main = () => {
  return (
    <StyledMain>
      <div className="main-container">
        <div className="trend-sans main-header">
          Try Our Barcode App <br />
          First Month Free Trial
        </div>
        <div className="main-sub-header">
          Your shopping experience should be always enjoyable
        </div>
        <div className="main-action">
          <Button> Download App</Button>
        </div>
        <div className="button-wrappers">
          <img
            src={require("../imgs/app-store.png")}
            className="store-image"
            alt="store"
          />
          <img
            src={require("../imgs/play-store.png")}
            className="store-image"
            alt="store"
          />
        </div>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background-image: url("${require("../imgs/main.png")}");
  min-width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: fixed;
  position: relative;
  text-align: center;
  .main-container {
    top: 300px;
    left: 250px;
    position: absolute;
  }
  .main-header {
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0px;
    font-size: 33px;
    line-height: 40px;
  }
  .main-sub-header {
    color: #ffffff;
    margin-top: 20px;
  }
  .main-action {
    margin-top: 25px;
    text-align: center;
  }

  .button-wrappers {
    margin-top: 30px;
    text-align: center;

    .store-image {
      width: 170px;
      max-height: 60px;
      min-height: 60px;
      cursor: pointer;
    }
    img:first-child {
      margin-right: 10px;
    }
  }
`;

export default Main;
