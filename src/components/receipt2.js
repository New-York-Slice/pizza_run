import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class Receipt2 extends React.Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.742306, lng: -74.179657 }}
        defaultZoom={18}
      ></GoogleMap>
    ));
    return (
      <div>
        <h1 id="pizza-header" className="text-center">
          <a className="isDisabled">
            <i className="material-icons">keyboard_arrow_left</i>Order In
            Progress<i className="material-icons">keyboard_arrow_right</i>
          </a>
        </h1>
        <div className="card cardOrder">
          <div className="card-header">Receipt</div>
          <div className="card-body">
            <h4 className="card-title">1 Small Pizza</h4>
            <h5>Customer Name: Hareem Bokhari</h5>
            <h5>Domino's Pizza</h5>
            <h5 className="card-title">
              Go to this drop off Location: NJIT Campus Center
            </h5>
            <GoogleMapExample
              containerElement={
                <div style={{ height: `60vh`, width: "100%" }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
            <p className="card-text">Notes: Plain cheese</p>
            <hr />
            <p>Total Price: $9.99</p>
            <Link to={{ pathname: "/finishRun" }}>
              <a href="#" className="btn btn-primary">
                Finish Dropoff
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Receipt2;
