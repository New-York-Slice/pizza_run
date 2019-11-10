import React, { Component } from "react";
import { Link } from "react-router-dom";

class PlaceOrder2 extends React.Component {
  render() {
    return (
      <div>
        <h1 id="pizza-header" className="text-center">
          <a className="isDisabled">
            <i className="material-icons">keyboard_arrow_left</i>Thank You!
            <i className="material-icons">keyboard_arrow_right</i>
          </a>
        </h1>
        <div className="card cardOrder">
          <div className="card-header">Receipt</div>
          <div className="card-body">
            <p>
              Your order is on the way! You will receive text notifications.
            </p>
            <h4 className="card-title">1 Small Pizza</h4>
            <h5>
              Location:{" "}
              <a href="https://goo.gl/maps/Cuerna9bA5z7jRcB6" target="_blank">
                Domino's Pizza
              </a>
            </h5>
            <h5 className="card-title">Drop Location: NJIT Campus Center</h5>
            <p className="card-text">Notes: Plain cheese</p>
            <hr />
            <p>Total Price: $9.99</p>
            <Link to={{ pathname: "/" }}>
              <a href="#" className="btn btn-primary">
                Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceOrder2;
