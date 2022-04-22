import React from "react";
import styled from "styled-components";

const Card = ({
  children,
  title,
  background,
  titleColor,
  numberSize,
  maxContextWidth,
}) => {
  return (
    <StyledCard
      background={background}
      titleColor={titleColor}
      numberSize={numberSize}
      maxContextWidth={maxContextWidth}
    >
      <div className="background-title">{title}</div>
      <div className="content">{children}</div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  flex: 1;
  height: 320px;
  position: relative;
  background: ${(p) => p.background};
  .background-title {
    position: absolute;
    color: ${(p) => p.titleColor};
    z-index: 1;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${(p) => (p.numberSize ? p.numberSize : "125px")};
    font-weight: 900;
  }
  .content {
    position: absolute;
    z-index: 2;
    text-align: center;
    top: 65%;
    width: ${(p) => (p.maxContextWidth ? p.maxContextWidth : "80%")};
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.33rem;
    color: #000;
    line-height: 2rem;
  }
`;

export default Card;
