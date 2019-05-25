import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default class Blog extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar />
        <Logo />
        <div className="MessageContainer">
          <h3 className="About">
            Under Construction <i id="spanner" class="fas fa-wrench" />
          </h3>
          <p className="AboutContent">
            This part of the website is currently under construction, if you are
            subscribed, you will be notified when the website has been updated.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
