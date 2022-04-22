import React from "react";
import styled from "styled-components";

const GrabYouGo = () => {
  return (
    <StyledGrabYouGo>
      <div className="left showcase">
        <img src={require("../imgs/cheetos.png")} alt="snack-box" />
      </div>
      <div className="right showcase">
        <img src={require("../imgs/Barcode-package.png")} alt="snack-box" />
      </div>
    </StyledGrabYouGo>
  );
};

const StyledGrabYouGo = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  .left {
    flex: 1;
    min-width: 600px;
  }
  .right {
    flex: 1;
    min-width: 600px;
  }
  .showcase {
    img {
      width: 100%;
    }
  }
  .cheetos-img {
    width: 70%;
  }
`;

export default GrabYouGo;
