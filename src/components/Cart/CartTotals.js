import React from "react";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartVAT, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right ">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              empty basket
            </button>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>£{cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">VAT:</span>
              <strong>£{cartVAT}</strong>
            </h5>
            <h5>
              <span className="text-title">total:</span>
              <strong>£{cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
