import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default class Contact extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar />
        <Logo />
        <div className="FormContainer">
          <h3 className="FormTitle">Get in touch</h3>
          <form action="">
            <input type="text" className="FormName" placeholder="Name" />
            <input type="text" className="FormEmail" placeholder="Email" />
            <input type="text" className="FormSubject" placeholder="Subject" />
            <input type="text" className="FormMessage" placeholder="Message" />
            <div className="FormButton">
              <button className="FormButton">Send</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
