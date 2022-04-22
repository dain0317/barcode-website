import React from "react";
import styled from "styled-components";

const Feature = ({
  children,
  title,
  background = "#F4F0EA",
  titleColor,
  icon,
}) => {
  return (
    <StyledFeature background={background} titleColor={titleColor}>
      <div className="icon">
        <img src={icon} />
      </div>
      <div className="background-title">{title}</div>
      <div className="content">{children}</div>
    </StyledFeature>
  );
};

const StyledFeature = styled.div`
  flex: 1;
  height: 320px;
  background: ${(p) => p.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  min-height: 400px;
  gap: 25px;
  .icon {
    img {
      width: 80px;
    }
  }
  .background-title {
    color: ${(p) => p.titleColor};
    font-weight: bold;
    font-size: 1.3rem;
    text-align: center;
    text-transform: uppercase;
  }
  .content {
    text-align: center;
    width: 50%;
    font-size: 1.1rem;
  }
`;

export default Feature;
