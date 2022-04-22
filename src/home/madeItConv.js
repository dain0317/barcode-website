import React from "react";
import styled from "styled-components";

const MadeItConv = () => {
  return (
    <StyledMadeItConv>
      <h1>We made it Convenient</h1>
      <div className="flex-box">
        <div className="left">
          <img src={require("../imgs/Barcode-logo.png")} alt="barcode-logo" />
        </div>
        <div className="right">
          <h2 className="info-title">
            Available in best convenience store franchises in Canada
          </h2>
          <p className="info">
            You can meet Barcode at best convenience store in Canada, Seven
            Eleven, Circle K and Barcode convenience store. Our goal is to make
            convenience store more convenient within our mobile application.
            Within Barcode membership you can access to all of our features
            including scan payment with your phone, search up for products you
            need near you, delivery system, and etc. You can meet Barcode at
            best convenience store in Canada, Seven Eleven, Circle K and Barcode
            convenience store. Our goal is to make convenience store more
            convenient within our mobile application. Within Barcode membership
            you can access to all of our features including scan payment with
            your phone, search up for products you need near you, delivery
            system, and etc.
          </p>
          <div className="images-wrapper">
            <img src={require("../imgs/711-logo.png")} alt="711" />
            <img src={require("../imgs/circleK-logo.png")} alt="o" />
          </div>
        </div>
      </div>
    </StyledMadeItConv>
  );
};

const StyledMadeItConv = styled.section`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  h1 {
    color: #c4d07e;
    padding: 45px;
    text-align: center;
    font-size: 50px;
  }
  .flex-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }
  .left {
    flex: 1;
    min-width: 600px;
    text-align: right;
    img {
      width: 526px;
      height: 450px;
      object-fit: cover;
      object-position: 50% 50%;
    }
    @media screen and (max-width: 1230px) {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right {
    min-width: 600px;
    flex: 1;
  }
  .info-title {
    max-width: 500px;
    margin-bottom: 20px;
  }
  .info {
    max-width: 500px;
    line-height: 22px;
  }
  .images-wrapper {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  @media screen and (max-width: 1230px) {
    .right {
      text-align: center;
    }
    .info-title {
      margin-left: auto;
      margin-right: auto;
    }
    .info {
      margin-left: auto;
      margin-right: auto;
    }
    .images-wrapper {
      justify-content: center;
      align-items: center;
    }
  }
`;

export default MadeItConv;
