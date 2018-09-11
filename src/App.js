import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <li>
                <Link to="/about/abc">About 1</Link>
              </li>
              <li>
                <Link to="/about/def">About 2</Link>
              </li>
            </li>
          </ul>
        </menu>
      </div>
    );
  }
}

export default App;
