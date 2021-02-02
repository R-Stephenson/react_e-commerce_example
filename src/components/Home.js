import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

import bulbOn from "../bulbOn.svg";
import bulbOff from "../bulbOff.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="container mt-4 bg-white">
        {/* start of Main page container */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-grey mt-5 mb-3">
            <h2 className="mb-0 pb-0">
              The moment you get an idea...
              <br />
              <br />
              <strong>* PING! *</strong>
            </h2>
          </div>
        </div>
        {/* end of Title row */}

        <div className="row">
          <div className="col-8 mx-auto">
            <div className="col-8 mx-auto px-0 col-md-3  position-relative">
              <img
                src={bulbOff}
                className=" bulb  position-absolute"
                alt="product"
              />
              <img
                src={bulbOn}
                className=" on bulb position-absolute "
                alt="product"
              />
            </div>
          </div>
        </div>
        <div className="row fix">
          {/* this puts bulb underneath */}
          <div className=" col-8 mx-auto px-0 col-md-7 text-center text-grey mt-4 mb-5">
            <h4>
              That's exactly what it was like for us here at <em>insert</em>,
              and ever since we have worked tirelessly to establish our brand
              and develop our products to meet the needs of the market.
            </h4>
            <br />
            <Link to="/product-list">
              <ButtonContainer bold>browse our products</ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer bold>Discover who we are</ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
