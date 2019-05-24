import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default class Fiction extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Logo />
        <h1 className="heading">HELLO WORLD</h1>
        <Footer />
      </div>
    );
  }
}
