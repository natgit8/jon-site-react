import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div style={{height: '800px', position: 'relative'}}>
        <Layout className="background-content" fixedHeader>
            <Header className="nav-bar" title={<span><span style={{ color: '#ddd' }}> </span><strong><a className="logo" href="/"> Jon Smith Designs</a></strong></span>}>
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </Navigation>
            </Drawer>
              <div className="page-content" />
              <Main/>
            <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
