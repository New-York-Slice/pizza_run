import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import Faker from "faker";

class Confirmation extends React.Component {
  render() {
    return (
      <div>
        <h1 id="pizza-header" className="text-center">
          <Link to={{ pathname: "/orders" }}>
            <a>
              <i className="material-icons">keyboard_arrow_left</i>Cancel{" "}
            </a>
          </Link>
          {/* <Link to={{ pathname: '/orders' }}> */}
          <a className="isDisabled">
            Confirmation<i className="material-icons">keyboard_arrow_right</i>
          </a>
          {/* </Link> */}
        </h1>
        <div className="card cardOrder">
          <div className="card-header">Confirmation</div>
          <div className="card-body">
            <h4 className="card-title">1 Small Pizza </h4>
            <h5>Name: Hareem Bokhari</h5>
            <h5>
              Store Location:{" "}
              <a href="https://goo.gl/maps/QxHmRwhKEXXDjmXh8" target="_blank">
                Domino's Pizza
              </a>
            </h5>
            <h5 className="card-title">Drop Location: NJIT Campus Center</h5>
            <p className="card-text">Notes: Plain cheese</p>
            <hr />
            <p>Total Price: $9.99</p>
            <Link to={{ pathname: "/receipt" }}>
              <a href="#" className="btn btn-primary">
                Accept Order
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
