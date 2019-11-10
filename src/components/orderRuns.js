import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";

class orderRuns extends React.Component {
  render() {
    return (
      <div>
        <div class="card">
          <h4 class="card-header" style={{ color: "black" }}>
            Order 1
          </h4>
          <div class="card-body" style={{ color: "black" }}>
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go for a run!
            </a>
          </div>

          <h4 class="card-header" style={{ color: "black" }}>
            Order 2
          </h4>
          <div class="card-body" style={{ color: "black" }}>
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go for a run!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default orderRuns;
