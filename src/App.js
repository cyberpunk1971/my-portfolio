import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import About from '../src/components/About';
import Backdrop from '../src/components/Backdrop';
import Home from '../src/components/Home';
import Portfolio from '../src/components/Portfolio';
import Sidedrawer from '../src/components/Sidedrawer';
import Toolbar from '../src/components/Toolbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from '../src/components/Footer';

library.add(fab, faEnvelope);

export class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.backdropClickHandler()
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  clickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.clickHandler} />
        <Sidedrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>

        </main>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/About" component={About} />

        <Footer />
      </div>

    )
  }
}

export default withRouter(App);
