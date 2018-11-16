import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Backdrop from '../src/components/Backdrop';
import Sidedrawer from '../src/components/Sidedrawer';
import Toolbar from '../src/components/Toolbar';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

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
      <Router>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.clickHandler} />
          <Sidedrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: "64px" }}>
            <p>Page content</p>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
