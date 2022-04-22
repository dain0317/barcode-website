import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <StyledMain>
      <div className="background">
        <img src={require("../imgs/Barcode_service.png")} />
      </div>
      <div className="mission">
        <img
          src={require("../imgs/Barcode-Transparent-Logo.png")}
          className="logo"
          alt="logo"
        />
        <p className="mission-content">
          You can meet Barcode at best convenience store in Canada, Seven
          Eleven, Circle K and Barcode convenience store. Our goal is to make
          convenience store more convenient within our mobile application.
          Within Barcode membership you can access to all of our features
          including scan payment with your phone, search up for products you
          need near you, delivery system, and etc. You can meet Barcode at best
          convenience store in Canada, Seven Eleven, Circle K and Barcode
          convenience store. Our goal is to make convenience store more
          convenient within our mobile application. Within Barcode membership
          you can access to all of our features including scan payment with your
          phone, search up for products you need near you, delivery system, and
          etc.
        </p>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 750px;
  .mission {
    text-align: center;
    width: 800px;
    padding: 50px;
    font-size: 1.2rem;
    font-weight: lighter;
    line-height: 1.5rem;
    background: #fff;
    transform: translateY(-200px);
    .logo {
      width: 240px;
      margin-bottom: 30px;
    }
  }
  .mission-content {
    padding: 15px;
    padding-bottom: 30px;
    border-bottom: 1px solid #000;
  }
`;

export default Main;
