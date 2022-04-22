import React from "react";
import styled from "styled-components";

const Location = () => {
  return (
    <StyledLocation>
      <h1 className="location-title">Barcode Stores nearby</h1>
      <div className="location-search-wrapper">
        <div className="location-input-legend">Location</div>
        <div className="input-wrapper">
          <input className="location-input" placeholder="1 Bloor Street" />
          <button className="input-button">Search</button>
        </div>
        <div className="location-info">
          1 Bloor E, Toronto, Ontario <br />
          <br /> Open Today 6:30 AM- 1:00 am
        </div>
      </div>
      <img
        className="location-map"
        src={require("../imgs/map.png")}
        alt="map"
      />
    </StyledLocation>
  );
};

const StyledLocation = styled.div`
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  .location-search-wrapper {
  }
  .location-title {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 40px;
  }
  .location-input-legend {
    font-size: 0.9rem;
    font-weight: 300;
    margin-bottom: 5px;
  }
  .input-wrapper {
    background: #f6ebe4;
    padding: 3px;
    min-width: 360px;
    width: 700px;
    display: flex;
    height: 55px;
  }
  .location-input {
    background: transparent;
    border: none;
    outline: none;
    flex: 1;
    padding: 0px 25px;
  }

  .input-button {
    width: 220px;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s;
  }
  .input-button:hover {
    background: #f6ebe4;
  }
  .location-info {
    padding: 25px;
  }
  .location-map {
  }
`;

export default Location;
