import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import house from '../styling/images/house.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="HomeHeader">
          <Navbar />
          <Logo />
          <div className="HomeBody">
            <div className="HouseContainer">
              <img
                src={house}
                alt="house"
                height="300"
                width="450"
                className="house"
              />
            </div>
            <div className="AboutContainer">
              <h3 className="About">About</h3>
              <p className="AboutContent">
                Lynne Caddick, originally from West Yorkshire, currently lives
                in a small village in Cheshire. She belongs to the Shrewsbury
                Stanza Group, and attends the Whitchurch Bookshrop Poetry Group
                and Nantwich Speakeasy.
              </p>
            </div>
          </div>
          {/* <div className="HomeFooter">
            <h3 className="CopyRightFooter">&copy; 2017 by LYNNE CADDICK</h3>
            <div className="ContactIcons">
              <i class="fab fa-facebook-f" />
              <i class="fab fa-pinterest-p" />
              <i class="fab fa-youtube" />
              <i class="fab fa-instagram" />
            </div>
          </div> */}
          <Footer />
        </div>
      </div>
    );
  }
}
