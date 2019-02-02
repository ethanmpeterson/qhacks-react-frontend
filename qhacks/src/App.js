import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>
            Edit <code>src/App.js</code> and save to reload.
          </p>*/}
          <p>Welcome to <code>CircuitSafe</code>✔</p>
        </header>
        <TextField
          id="min_width"
          label="Minimum PCB Trace Width"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
      </div>
    );
  }
}

export default App;
