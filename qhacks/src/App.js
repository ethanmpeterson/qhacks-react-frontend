import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    
  };

  handleClick = () => {
    console.log("Button clicked")
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
        <div>
          <p>Measurements mil</p>
          <p>Voltage in Volts and Current is given in Amperes</p>
        </div>
        <div>
          <TextField
            id="min_width"
            label="Minimum PCB Trace Width"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('min_width')}
            margin="normal"
          />
          <TextField
            id="min_dist"
            label="Minimum Distance Between Traces"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('min_dist')}
            margin="normal"
          />
          <TextField
            id="voltage"
            label="Circuit Voltage Specification"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('voltage')}
            margin="normal"
          />
          <TextField
            id="current"
            label="Circuit Amperage (A)"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('current')}
            margin="normal"
          />
        </div>
        <div>
          <p></p>
          <Button color='primary' onClick={this.handleClick}>Compute</Button>
        </div>
      </div>
    );
  }
}

export default App;
