import React, { Component } from "react";
import { Link } from "react-router-dom";
import Faker from "faker";

class OrdersRun extends React.Component {
  render() {
    return (
      <div>
        <div className="card cardOrder">
          <div className="card-header">Domino's Pizza</div>
          <div className="card-body">
            <h4 className="card-title">1 Small Pizza</h4>
            <h5>Name: Hareem Bokhari</h5>
            <h5 className="card-title">Dropoff: NJIT Campus Center</h5>
            <p className="card-text">Plain cheese</p>
            <Link to={{ pathname: "/confirmation" }}>
              <a href="#" className="btn btn-primary">
                Accept Order
              </a>
            </Link>
          </div>
        </div>
        <div className="card cardOrder">
          <div className="card-header">Forte Pizza</div>
          <div className="card-body">
            <h4 className="card-title">1 Slice of White Pizza</h4>
            <h5>Name: {Faker.name.findName()}</h5>
            <h5 className="card-title">Dropoff: Fenster Hall</h5>
            <p className="card-text">Allergic to tomatoes, no sauce!</p>
            <a href="#" className="btn btn-primary">
              Accept Order
            </a>
          </div>
        </div>
        <div className="card cardOrder">
          <div className="card-header">Giovanni Pizza & Grill</div>
          <div className="card-body">
            <h4 className="card-title">1 Slice of Chicken Buffalo Pizza</h4>
            <h5>Name: {Faker.name.findName()}</h5>
            <h5 className="card-title">Dropoff: Tiernan Hall</h5>
            <p className="card-text">N/A</p>
            <a href="#" className="btn btn-primary">
              Accept Order
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default OrdersRun;
