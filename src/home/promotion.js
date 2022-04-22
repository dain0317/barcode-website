import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Promotion = () => {
  return (
    <StyledPromotion>
      <div className="promotion-container">
        <div className="flex-item  left">
          <h2 className="signup-title">
            Sign up for all the latest trends, <br />
            news and promotions
          </h2>
          <input className="email-input" placeholder="Enter your email here" />
          <button className="promo-button">Send</button>
          <div className="address">
            3333 Roehampton Ave,
            <br />
            Toronto, ON, CA M5Z 5H0
            <br />
            <br />
            Tel: 123 456 7890 | info@mysite.com
          </div>
          <div className="icon-wrappers">
            <Icon name="facebook f" className="social-icon" />
            <Icon name="twitter" className="social-icon" />
            <Icon name="youtube" className="social-icon" />
          </div>
        </div>
        <div className="flex-item  right">
          <h2 className="signup-title">
            Yes, I want to join the Barcode,
            <br /> Sign me up!
          </h2>
          <button className="signup-button">Download the App</button>
          <div>
            <img src={require("../imgs/Barcode-simpleLogo.png")} />
          </div>
        </div>
      </div>
      <div className="button-wrappers">
        <button className="download-button">Download the Barcode App</button>
      </div>
      <div className="button-wrappers">
        <img
          src={require("../imgs/app-store.png")}
          alt="store"
          className="store-button"
        />
        <img
          src={require("../imgs/play-store.png")}
          alt="store"
          className="store-button"
        />
      </div>
    </StyledPromotion>
  );
};

const StyledPromotion = styled.section`
  margin: 30px 0;
  .promotion-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .flex-item {
    min-width: 860px;
    padding: 80px 0 30px 0;
  }
  .left {
    background: #1d1e21;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right {
    background: #ef9c83;
    display: flex;
    flex-direction: column;
    align-items: center;
    .signup-title {
      color: #1d1e21;
    }
  }
  .signup-title {
    color: #fff;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 60px;
  }
  .email-input {
    border: 3px solid #ff4040;
    background: transparent;
    width: 100%;
    color: #fff;
    padding: 8px;
    text-align: center;
    font-weight: 300;
    font-size: 1.05rem;
    width: 350px;
    display: block;
  }
  .email-input:focus {
    outline: none;
  }
  .email-input::placeholder {
    color: #fff;
  }
  .promo-button {
    padding: 10px 0;
    width: 230px;
    background: #ef9c83;
    font-size: 1.1rem;
    cursor: pointer;
    color: #1d1e21;
    font-weight: 600;
    border-radius: 30px;
    margin-top: 8px;
    border: none;
  }
  .promo-button:focus {
    outline: none;
    border: none;
  }
  .signup-button {
    padding: 10px 0;
    width: 230px;
    background: #ef9c83;
    font-size: 1.1rem;
    cursor: pointer;
    color: #1d1e21;
    font-weight: 600;
    border-radius: 30px;
    border: 2px solid #1d1e21 !important;
    margin-top: 8px;
  }
  .signup-button:focus {
    outline: none;
    border: 2px solid #1d1e21 !important;
  }
  .address {
    color: #fff;
    font-weight: 200;
    margin-top: 50px;
    line-height: 25px;
  }
  .icon-wrappers {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    gap: 15px;
  }
  .social-icon {
    color: #fff;
    cursor: pointer;
    font-size: 1.4rem;
  }
  .button-wrappers {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .download-button {
    padding: 10px 15px;
    background: transparent;
    border: 2px solid #000;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 40px;
    cursor: pointer;
  }
  .store-button {
    width: 150px;
  }
`;

export default Promotion;
