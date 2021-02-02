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
        <Link to="/product-list">
          <img
            src={logo}
            style={{ height: 90, width: 90 }}
            alt="store"
            className="navbar-brand mx-3 pr-3"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5 mx-auto">
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-item ml-3 mx-auto">
            <Link to="/" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item ml-3 mx-auto">
            <Link to="/product-list" className="nav-link">
              products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <FontAwesomeIcon
              icon="shopping-basket"
              className="mr-2 basket-icon"
            />
            basket
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--brightWhite);
  img:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  .nav-link {
    color: var(--mainGrey) !important;
    opacity: 1 !important;
    font-size: 1.2rem;
    text-transform: capitalize;

    &:hover {
      color: var(--mainGrey) !important;
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
