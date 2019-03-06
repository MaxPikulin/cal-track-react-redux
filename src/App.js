import React, { Component } from 'react';
import Button from './components/Button';
import CalsIn100 from './components/CalsIn100';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalsIn100 />
        <Button />
      </div>
    );
  }
}
// Create generic component for inputs(label from props).

export default App;
