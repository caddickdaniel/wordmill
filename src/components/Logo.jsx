import React, { Component } from 'react';
import wordmill from '../styling/images/wordmill.png';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img
          src={wordmill}
          alt="logo"
          className="logo"
          height="200"
          width="200"
        />
        <h2 className="PoetryProse">~ Poetry & Prose ~</h2>
      </div>
    );
  }
}
