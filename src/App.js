import React, { Component, Fragment } from 'react';
import './styling/App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Poetry from './components/Poetry';
import Fiction from './components/Fiction';
import NonFiction from './components/NonFiction';
import Blog from './components/Blog';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Home path="/" />
          <Poetry path="/poetry" />
          <Fiction path="/fiction" />
          <NonFiction path="/nonfiction" />
          <Contact path="/contact" />
          <Blog path="/blog" />
        </Router>{' '}
      </Fragment>
    );
  }
}

export default App;
