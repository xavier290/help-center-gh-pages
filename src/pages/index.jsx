import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import Footer from "../components/footer";
import loop from "./images/loop.svg";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <div className="index">
          <section className="search">
            <h1>Help Center</h1>

            <form role="search">
              <input
                type="text"
                name="search"
                placeholder="Search for help..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                autoFocus={true}
                style={{ backgroundImage: `url(${loop})` }}
              />
            </form>
          </section>
          <main>
            <h1>Explore the topics:</h1>
            <section className="main-content">
              <div className="box">
                <Link to="engineered-wood-products">
                  Engineered <br></br> Wood Products
                </Link>
              </div>
              <div className="box">
                <Link to="steel-trusses">Steel Trusses</Link>
              </div>
              <div className="box">
                <Link to="wall-panels">Wall Panels</Link>
              </div>
              <div className="box">
                <Link to="windows">Windows</Link>
              </div>
              <div className="box">
                <Link to="wood-trusses">Wood Trusses</Link>
              </div>
              <div className="box">
                <Link to="#">Builders</Link>
              </div>
              <div className="box">
                <Link to="#">Best Resources</Link>
              </div>
              <div className="box">
                <Link to="#">Our Mission</Link>
              </div>
              <div className="box">
                <Link to="#">Need help from the experts?</Link>
              </div>
              <div className="box">
                <Link to="#">Articles</Link>
              </div>
              <div className="box">
                <Link to="#">Q&A</Link>
              </div>
              <div className="box">
                <Link to="#">Not what you'r looking for?</Link>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Index);
