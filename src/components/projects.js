import React, { Component } from 'react';
// import img from '../images/Friars_Jon-55.jpg';
import { Parallax } from 'react-parallax';

class Projects extends Component {
  render() {
    return(
      <section className="content">
        <div className="container">
          <div className="parallax">
            <Parallax className="friar-img" bgImage={require('../images/Friars_Jon-55.jpg')} strength={800}>
                <div style={{ height: 500 }}>
                
                </div>
            </Parallax>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;
