import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Series from "./Series";
import NewSeries from "./NewSeries";

const about = () => (
  <section className="intro-section">
    <h1>Sobre</h1>
  </section>
);
class App extends Component {
  render() {
    return (
      <Router>
        <nav
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header page-scroll">
              <a className="navbar-brand page-scroll" href="#page-top">
                <img src="images/logo.png" height="30" />
              </a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">Sobre</Link>
                </li>
                <li>
                  <Link to="/newseries">Nova série</Link>
                </li>
                <li>
                  <Link to="/series">Séries</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/series:genre" component={Series} />
        <Route exact path="/newseries" component={NewSeries} />
      </Router>
    );
  }
}

export default App;
