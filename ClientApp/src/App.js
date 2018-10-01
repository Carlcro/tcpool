import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Person from "./components/Person/Person";
import Workplace from "./components/Workplace/Workplace";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

export default () => (
  <Layout>
    <ToastContainer />
    <Route exact path="/" component={Home} />
    <Route path="/personnel" component={Person} />
    <Route path="/workplace" component={Workplace} />
  </Layout>
);
