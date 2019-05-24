import React, { Component } from 'react';
import { Link } from '@reach/router';

export default class Navbar extends Component {
  state = {
    burgerActive: false
  };

  navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.NavLinks');
    const navLinks = document.querySelectorAll('.NavLinks button');

    if (nav.classList) {
      nav.classList.toggle('NavActive');
      burger.classList.toggle('toggle');
    }

    navLinks.forEach((button, index) => {
      if (button.style.animation) {
        button.style.animation = '';
      } else {
        button.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
  };

  render() {
    return (
      <div className="HeaderContainer">
        <div className="NavBar">
          <div className="NavLinks">
            <Link to="/">
              <button className="HomeButton">HOME</button>
            </Link>
            <Link to="/poetry">
              <button className="PoetryButton">POETRY</button>
            </Link>
            <Link to="/fiction">
              <button className="FictionButton">FICTION</button>
            </Link>
            <Link to="/nonfiction">
              <button className="NonFictionButton">NON-FICTION</button>
            </Link>
            <Link to="/blog">
              <button className="BlogButton">BLOG</button>
            </Link>
            <Link to="/contact">
              <button className="ContactButton">CONTACT</button>
            </Link>
          </div>
          <div className="burger" onClick={() => this.navSlide()}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </div>
      </div>
    );
  }
}
