import React, { Component } from "react";
import "./Navbar.css";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
        <div className="Navbar">
          <p className="navbar1">QTemu</p>
          <p className="navbar2">Create Meetup</p>
          <p className="navbar3">Explore</p>
          <p className="navbar4">Login</p>
        </div>
      </div>
    );
  }
}
