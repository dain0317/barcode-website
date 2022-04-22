import React from "react";
import styled from "styled-components";
import Feature from "../components/feature";

const Store = () => {
  return (
    <StyledStore>
      <div className="images-wrapper">
        <div className="left image-holder">
          <img src={require("../imgs/store1.png")} alt="store" />
        </div>
        <div className="right image-holder">
          <img src={require("../imgs/store2.png")} alt="store" />
        </div>
      </div>
      <div>
        <h1 className="feature-title">Features Include</h1>
        <div className="features-wrapper">
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
            No need to wait in line, pay with your smartphone through barcode
            app
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
      </div>
    </StyledStore>
  );
};

const StyledStore = styled.section`
  margin-bottom: 100px;
  .images-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .image-holder {
    flex: 1;
    min-width: 450px;
    max-height: 600px;
    img {
      width: 100%;
    }
  }
  .feature-title {
    text-align: center;
    margin: 50px 0 30px 0;
  }
  .features-wrapper {
    display: flex;
  }
`;

export default Store;
