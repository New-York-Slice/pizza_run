import React, { Component } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

class FinishRun extends React.Component {
  render() {
    return (
      <div>
        <Confetti />
        <h1 id="pizza-header" className="text-center">
          <Link to={{ pathname: "/" }}>
            <a>
              <i className="material-icons">keyboard_arrow_left</i>Home
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </Link>
        </h1>
        <div className="card cardOrder">
          <div className="card-header">Order Complete</div>
          <div className="card-body">
            <h4 className="card-title">1 Small Pizza</h4>
            <h5>Customer Name: Hareem Bokhari</h5>
            <h5>Store Name: Domino's Pizza</h5>
            <h5 className="card-title">
              Drop off Location: NJIT Campus Center
            </h5>
            <p className="card-text">Notes: Plain cheese</p>
            <hr />
            <p>Total Price: $9.99</p>
            <h4>Credits Applied: 1000 Points</h4>
            <hr />
            <Link to={{ pathname: "/" }}>
              <a href="#" className="btn btn-primary">
                Complete Order
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FinishRun;
