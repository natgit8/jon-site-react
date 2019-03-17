import React, { Component } from 'react';
import { Grid, Cell }from 'react-mdl';
import img from '../images/sitephoto.jpg';
import image from '../images/paintbrush.jpg';
import { Button } from 'semantic-ui-react'; 

class LandingPage extends Component {
  render() {
    return(

      <div className="about">
        <div id="about-bg-diagonal" className="bg-parallax"> </div>
        <Grid className="landing-grid">
          <Cell className="col-4" col={4}>
            <div id="about-content-box">
              <div id="about-content-box-inner">
                <div className="content-title">
                  <h3>Create </h3>
                  </div>
              </div>
              <div id="about-desc">
                <p>
                  Lorem ipsum wiley coyote
                </p>
              </div>
              <div id="about-btn">

              </div>
            </div>
          </Cell>
          <Cell className="col-4" col={4}>
            <img src={img}
                 alt="SitePhoto"
                 width="800px"
                 height="650px"
                 />
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default LandingPage;
