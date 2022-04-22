import React from "react";
import styled from "styled-components";
import Card from "../components/card";
import Feature from "../components/feature";

const HowItWorks = () => {
  return (
    <StyledHowItWorks>
      <h1>How it works?</h1>
      <div className="cards-wrapper">
        <Card background="#D5D8E0" title="01" titleColor={"#FFEAE8"}>
          Shop at available stores with Barcode
        </Card>
        <Card background="#9DA4B2" title="02" titleColor={"#ECDBFF"}>
          Scan and pay with your smartphone
        </Card>
        <Card background="#818691" title="03" titleColor={"#D4EDEE"}>
          Once paid, you will receive QR code receipt
        </Card>
        <Card background="#787C88" title="04" titleColor={"#DBDBDB"}>
          Skip the check-out line, scan the QR receipt on the way out
        </Card>
      </div>
      <h1>Features Include</h1>
      <div className="cards-wrapper">
        <Feature
          title="Delivery"
          titleColor={"#ED1E79"}
          icon={require("../imgs/delivery.png")}
        >
          Barcode also offers delivery system after you shop in the store.
        </Feature>
        <Feature
          title={
            <>
              CONTACTLESS <br /> PAYMENT
            </>
          }
          titleColor={"#45C6C9"}
          icon={require("../imgs/phone.png")}
        >
          No need to wait in line, pay with your smartphone through barcode app
        </Feature>
        <Feature
          title={
            <>
              SEARCH ITEM <br />& LOOK UP
            </>
          }
          titleColor={"#ED1E79"}
          icon={require("../imgs/search.png")}
        >
          Looking for an product and not sure where you could get it? Barcode
          app allows to search up all products and stores nearby
        </Feature>
        <Feature
          title={
            <>
              CUSTOMER
              <br />
              SERVICE
            </>
          }
          titleColor={"#45C6C9"}
          icon={require("../imgs/headphones.png")}
        >
          We offer 24/7 customer service for any issues
        </Feature>
      </div>
    </StyledHowItWorks>
  );
};

const StyledHowItWorks = styled.section`
  h1 {
    padding: 60px 0;
    font-weight: 900;
    text-align: center;
  }
  .cards-wrapper {
    display: flex;
  }
`;

export default HowItWorks;
