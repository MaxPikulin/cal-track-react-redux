import React, { Component } from 'react';
import Inputs from './components/Inputs';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Inputs />
        <Button />
      </div>
    );
  }
}

export default App;