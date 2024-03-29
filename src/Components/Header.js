import React, { Component } from 'react';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ReactHtmlParser from 'react-html-parser';

library.add(
  faEnvelope,
  faWhatsapp,
  faInstagram,
  faYoutube
);

class Header extends Component {
  render() {

    if (this.props.data) {
      var company = this.props.data.company;
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={[network.prefix, network.icon]} />
          </a>
        </li>
      })
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className={cs({current: this.props.section === 'home'})}>
              <a className="smoothscroll" href="#home">Home</a>
            </li>
            <li className={cs({current: this.props.section === 'about'})}>
              <a className="smoothscroll" href="#about">Quiénes somos</a>
            </li>
            <li className={cs({current: this.props.section === 'portfolio'})}>
              <a className="smoothscroll" href="#portfolio">Trabajos</a>
            </li>
            <li className={cs({current: this.props.section === 'testimonials'})}>
              <a className="smoothscroll" href="#testimonials">Testimonios</a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{company}</h1>
            <h3>{ReactHtmlParser(name)}, {ReactHtmlParser(occupation)} {city}. {ReactHtmlParser(description)}.</h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    );
  }
}

export default Header;
