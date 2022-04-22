import React from "react";
import styled from "styled-components";
import Card from "../components/card";

const HowItWorks = () => {
  const numberSize = "80px";
  const maxContextWidth = "50%";
  return (
    <StyledHowItWorks>
      <h1 className="how-it-works-title">How it works?</h1>
      <div className="cards-wrapper">
        <Card
          background="#F1EDE8"
          title="01"
          titleColor={"#F1792F"}
          numberSize={numberSize}
          maxContextWidth={maxContextWidth}
        >
          Download the Barcode App through App store or Google Play
        </Card>
        <Card
          background="#F0E8DE"
          title="02"
          titleColor={"#F1792F"}
          numberSize={numberSize}
          maxContextWidth={maxContextWidth}
        >
          Join Barcode membership
        </Card>
        <Card
          background="#EBDFD0"
          title="03"
          titleColor={"#F1792F"}
          numberSize={numberSize}
          maxContextWidth={maxContextWidth}
        >
          Shop in Barcode stores (Circle K, Seven Eleven)
        </Card>
        <Card
          background="#E4D5C2"
          title="04"
          titleColor={"#F1792F"}
          numberSize={numberSize}
          maxContextWidth={maxContextWidth}
        >
          Tap, Pay and Go!
        </Card>
      </div>
    </StyledHowItWorks>
  );
};

const StyledHowItWorks = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  .how-it-works-title {
    text-align: center;
  }
  .cards-wrapper {
    display: flex;
    gap: 30px;
    padding: 30px 50px;
  }
`;

export default HowItWorks;
