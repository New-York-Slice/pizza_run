import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="logo">
          <embed
            src="https://s3-eu-west-1.amazonaws.com/cdn.pbrd.co/images/IG08CN3.png?o=1"
            alt="Pizza logo"
          />
          <div id="login" className="button-group">
            <Link to={{ pathname: "/login" }}>
              <button>Login</button>
            </Link>
            <Link to={{ pathname: "/register" }}>
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
