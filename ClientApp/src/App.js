import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/common/protectedRoute";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Person from "./components/Person/Person";
import Workplace from "./components/Workplace/Workplace";
import Login from "./components/Login";
import ProtectedPage from "./components/ProtectedPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

export default () => (
  <Layout>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/personnel" component={Person} />
      <Route path="/workplace" component={Workplace} />
      <ProtectedRoute path="/protected" component={ProtectedPage} />  
      <Route path="/login" component={Login} />
    </Switch>
  </Layout>
);
