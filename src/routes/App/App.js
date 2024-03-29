import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import { SetSampleAction } from '../../redux/sample/actions';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.scss';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>Button</Button>
          <DatePicker />
          <Button>Hello World</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  SampleReducer: state.SampleReducer
});

const mapDispatchToProps = {
  SetSampleAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);