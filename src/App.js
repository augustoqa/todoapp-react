import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      My Hello World
      <FirstComponent />
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}

function FirstComponent() {
  return (
    <div className="firstComponent">
      First Component
    </div>
  );
}

function SecondComponent() {
  return (
    <div className="secondComponent">
      Second Component
    </div>
  );
}

class ThirdComponent extends Component {
  render() {
    return (
      <div className="thirdComponent">
        Third Component
      </div>
    )
  }
}

export default App;
