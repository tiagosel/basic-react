import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextCounter from './modules/TextCounter';
import {MyListItem,MyList} from './modules/MyList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextCounter lable='Count char'/>
        <br/>
        <MyList>
            <span>ABC</span>
            <span>DEF</span>
        </MyList>
      </div>
    );
  }
}

export default App;
