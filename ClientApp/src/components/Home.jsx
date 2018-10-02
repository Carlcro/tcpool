import React from "react";
import { connect } from "react-redux";

const Home = props => (
  <div>
    <h1>Time Care</h1>
    <h2>Multi Access Pool </h2>
  </div>
);

export default connect()(Home);
