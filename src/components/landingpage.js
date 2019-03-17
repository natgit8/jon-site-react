import React, { Component } from 'react';
import { Grid, Cell, Button }from 'react-mdl';
import { Parallax, Background } from 'react-parallax';
// import img from '../images/sitephoto.jpg';
// import image from '../images/paintbrush.jpg';

class LandingPage extends Component {



  render() {
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };

    const insideStyles = {
      background: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    };
    return(

      <div style={styles}>
      <Parallax bgImage={require('../images/sitephoto.jpg')} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={require('../images/paintbrush.jpg')} blur={{ min: -2, max: 5 }} >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Dynamic Blur</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={require('../images/jon-54.jpg')} strength={-200}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Reverse direction</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax
        bgImage={require('../images/jon-71.jpg')}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
            </div>
          )}
        >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
      </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
    <Background className="custom-bg">
        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
    </Background>
  </div>
        // <Grid className="landing-grid">
        //   <Cell className="col-4" col={4}>
        //     <img src={img}
        //          alt="SitePhoto"
        //          width="800px"
        //          height="650px"
        //          />
        //   </Cell>
        // </Grid>
    )
  }
}

export default LandingPage;
