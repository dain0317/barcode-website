import React from "react";
import styled from "styled-components";
import Logo from "./logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNav>
      <div className="nav-container">
        <div className="logo-container">
          <Logo />
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 80px;
  background: #fff;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 3;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  a {
    color: #000;
    transition: all 0.5s;
  }
  a:hover {
    color: #ff8c62;
  }
  .main-logo {
    width: 120px;
  }
  .nav-container {
    display: flex;
    align-items: center;
  }
  .logo-container {
    flex: 1;
  }
  .nav-items {
    display: flex;
    li {
      margin-right: 40px;
      font-size: 18px;
      flex-wrap: wrap;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
`;

export default NavBar;
