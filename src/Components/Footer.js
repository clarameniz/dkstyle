import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faFacebookF,
  faInstagram
);

class Footer extends Component {
  render() {
    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={[network.prefix, network.icon]} />
            </a>
          </li>
        )
      })
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>
            
            <ul className="copyright">
              <li>&copy; Copyright 2020 DKstyle</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
