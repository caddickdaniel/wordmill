import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="HomeFooter">
          <h3 className="CopyRightFooter">&copy; 2017 by LYNNE CADDICK</h3>
          <div className="ContactIcons">
            <i class="fab fa-facebook-f" />
            <i class="fab fa-pinterest-p" />
            <i class="fab fa-youtube" />
            <i class="fab fa-instagram" />
          </div>
        </div>
      </div>
    );
  }
}
