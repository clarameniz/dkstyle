import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var biointro = this.props.data.biointro;
      var biodesc = this.props.data.biodesc;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Manuel Duque" />
          </div>
          <div className="nine columns main-col">
            <h2>Sobre mí</h2>
            <p>{biointro}</p>
            <p>{biodesc}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
