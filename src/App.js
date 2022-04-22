import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home/index";
import Location from "./location";

import NavBar from "./layouts/nav-bar";
import Footer from "./layouts/footer";
import Service from "./services";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/location" exact>
            <Location />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
