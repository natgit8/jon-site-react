import React, { Component } from 'react';
import { Grid, Cell, Button }from 'react-mdl';
import img from '../images/sitephoto.jpg';
import image from '../images/paintbrush.jpg';

class LandingPage extends Component {
  render() {
    return(
        <Grid className="landing-grid">
          <Cell className="col-4" col={4}>
            <img src={img}
                 alt="SitePhoto"
                 width="800px"
                 height="650px"
                 />
          </Cell>
        </Grid>
    )
  }
}

export default LandingPage;
