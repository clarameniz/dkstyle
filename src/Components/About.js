import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
      var profilepic= `${process.env.PUBLIC_URL}/images/${this.props.data.image}`;
      var biointro = this.props.data.biointro;
      var biodesc = this.props.data.biodesc;
      var biodesc1 = this.props.data.biodesc1;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Manuel Duque" />
          </div>
          <div className="nine columns main-col">
            <h2>Quiénes somos</h2>
            <p>{biointro}</p>
            <p>{biodesc1}</p>
            <p>{biodesc}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
