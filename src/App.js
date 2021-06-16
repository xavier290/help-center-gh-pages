import "./styling/main.scss";

import React, { Component, Fragment, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//components
import SideBar from "./components/sidebar";
import Spinner from "react-bootstrap/Spinner";

//pages
import Index from "./pages/index";
import routes from "./routes";

export class App extends Component {
  render() {
    return (
      <div className="container-app">
        <Router>
          <Fragment>
            <SideBar />
            <Suspense
              fallback={
                <div className="loader">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              }
            >
              <Switch>
                {routes.map((route) => (
                  <Route
                    path={route.path}
                    component={route.component}
                    key={route.path}
                  />
                ))}
                <Route path="/" exact>
                  <Index />
                </Route>
              </Switch>
            </Suspense>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
