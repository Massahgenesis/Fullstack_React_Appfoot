import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPlayers from "./components/add-tutorial.component";
import Players from "./components/tutorial.component";
import PlayersList from "./components/tutorials-list.component";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <a href="/Players" className="navbar-brand">
              FTF
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/Players"} className="nav-link">
                  Statistics
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add a new players
                </Link>
              </li>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/Players"]} component={PlayersList} />
            <Route exact path="/add" component={AddPlayers} />
            <Route path="/Players/:id" component={Players} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
