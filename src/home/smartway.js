import React from "react";
import styled from "styled-components";

const SmartWay = () => {
  return (
    <StyledStartWay>
      <h1 className="smart-title">
        SMART WAY TO CONVENIENT YOURSELF <br /> WITH BARCODE
      </h1>
      <p className="explanation">
        You can meet Barcode at best convenience store in Canada, Seven Eleven,
        <br />
        Circle K and Barcode convenience store. Our goal is to make convenience
        <br />
        store more convenient within our mobile application. Within Barcode
        <br />
        membership you can access to all of our features including scan payment
        <br />
        with your phone, search up for products you need near you, delivery
        <br />
        system, and etc. You can meet Barcode at best convenience store in
        <br />
        Canada, Seven Eleven, Circle K and Barcode convenience store. Our goal
        <br />
        is to make convenience store more convenient within our mobile
        <br />
        application. Within Barcode membership you can access to all of our
        <br />
        features including scan payment with your phone, search up for products
        <br />
        you need near you, delivery system, and etc.
        <br />
      </p>
    </StyledStartWay>
  );
};

const StyledStartWay = styled.div`
  min-width: 100vw;
  background: #e6e6e6;
  padding: 80px 30px 10px 30px;
  text-align: center;
  min-height: 65vh;
  .smart-title {
    color: #ff6161;
    font-weight: 300;
    position: relative;
    padding: 20px;
    margin-bottom: 30px;
    letter-spacing: 1px;
  }
  .smart-title:after {
    position: absolute;
    content: " ";
    width: 50px;
    border-bottom: 2px solid #ff6161;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .explanation {
    color: #000;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 1px;
  }
`;

export default SmartWay;
