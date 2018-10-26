import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
class App extends Component {
  render() {
    return (
      <div className="App">
          Hello
          <Welcome parametre={'HelloWorld'} />
      </div>
    );
  }
}

export default App;
