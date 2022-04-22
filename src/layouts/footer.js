import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h1 className="footer-title">
        CONTACT <br />
        <span>US</span>​
      </h1>
      <div className="contact">
        Tel. 123-456-7890
        <br />
        Fax. 123-456-7890
        <br />
        555 Roehampton, <br />
        Toronto, Ontario
        <br />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: #000;
  padding: 40px 0px;
  text-align: center;
  .footer-title {
    color: #4bd1a0;
    font-weight: 900 !important;
    text-transform: uppercase;
    font-size: 40px;
    position: relative;
    padding-bottom: 30px;
    span {
      color: #fff;
    }
  }
  .footer-title::after {
    content: " ";
    position: absolute;
    bottom: 0;
    width: 100px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 5px solid #fff;
  }
  .contact {
    margin-top: 25px;
    color: #fff;
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.8rem;
  }
`;

export default Footer;
