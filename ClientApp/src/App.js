import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Person from "./components/Person/Person";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => (
  <Layout>
    <ToastContainer />
    <Route exact path="/" component={Home} />
    <Route path="/personnel" component={Person} />
  </Layout>
);
