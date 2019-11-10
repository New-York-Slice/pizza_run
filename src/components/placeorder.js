import React, { Component } from "react";
import { Link } from "react-router-dom";

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 2.0,
      quantity: 1,
      total: 2.0
    };
    this.getPrice = this.getPrice.bind(this);
  }

  getPrice(e) {
    this.setState({ price: e.target.value });
    this.setState({ total: e.target.value * this.state.quantity });
  }

  getQuantity(e) {
    this.setState({ quantity: e.target.value });
    this.setState({ total: e.target.value * this.state.price });
  }

  render() {
    return (
      <div>
        <h1 id="pizza-header" className="text-center">
          {/* <Link to={{ pathname: '/placeorder' }}> */}
          <a className="isDisabled">
            <i className="material-icons">keyboard_arrow_left</i>Pizza{" "}
          </a>
          {/* </Link> */}
          <Link to={{ pathname: "/orders" }}>
            <a>
              Run<i className="material-icons">keyboard_arrow_right</i>
            </a>
          </Link>
        </h1>
        <span>
          Store
          <div class="dropdown">
            <select className="form-control col-12 mb-3">
              <option value="Giovanni Pizza and Grill">
                Giovanni Pizza and Grill
              </option>
              <option value="Forte Pizzeria">Forte Pizzeria</option>
              <option value="Domino's Pizza">Domino's Pizza</option>
            </select>
          </div>
        </span>
        <span>
          {" "}
          QTY
          <div class="dropdown">
            <select
              className="form-control col-12 mb-3"
              onChange={event => this.getQuantity(event)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </span>
        <span>
          Order
          <div class="dropdown">
            <select
              className="form-control col-12 mb-3"
              onChange={event => this.getPrice(event)}
            >
              <option value="2.00">Slice of Pizza - $2.00</option>
              <option value="7.99">Small Pie - $7.99</option>
              <option value="9.99">Medium Pie - $9.99</option>
              <option value="12.99">Large Pie -$12.99</option>
            </select>
          </div>
        </span>
        <h6>Order Details</h6>
        <input className="form-control col-12 mb-3" />
        <h6>Location</h6>
        <span>
          <div class="dropdown">
            <select className="form-control col-12 mb-3">
              <option value="Center">NJIT Campus Center</option>
              <option value="Fenster">Fenster Hall</option>
              <option value="Kupfrian">Kupfrian Hall</option>
              <option value="Tiernan">Tiernan Hall</option>
              <option value="King">NJIT Central King Building</option>
            </select>
          </div>
        </span>
        <p>Attention 25% compulsory tip added to order</p>
        <h4>
          Total:
          <span>
            {" "}
            ${(this.state.total + this.state.total * 0.25).toFixed(2)}
          </span>{" "}
        </h4>

        <Link to={{ pathname: "/placeOrder2" }}>
          <a href="#" className="btn btn-primary">
            Confirm Order
          </a>
        </Link>
      </div>
    );
  }
}

export default PlaceOrder;
