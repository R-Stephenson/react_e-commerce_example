import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            style={{ height: 80, width: 80 }}
            alt="store"
            className="navbar-brand"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <FontAwesomeIcon icon="shopping-basket" className="mr-2" />
            basket
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--brightWhite);
  .nav-link {
    color: var(--offWhite) !important;
    opacity: 1 !important;
    font-size: 1.2rem;
    text-transform: capitalize;
    &:hover {
      color: var(--offWhite) !important;
      transform: scale(1.2);
      transition: all 0.2s ease-in-out;
    }
    &:focus {
      outline: none;
    }
    &:after {
      content: "";
      display: block;
      margin: auto;
      height: 1px;
      width: 0px;
      background: transparent;
      transition: width 0.3s ease, background-color 0.3s ease;
    }
    &:hover:after {
      width: 100%;
      background: var(--mainOrange);
    }
  }
`;
