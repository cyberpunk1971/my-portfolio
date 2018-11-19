import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../components/ToggleButton';
import './Toolbar.css';

export default function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar-nav">
        <div className="toolbar-toggle-btn">
          <ToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar-logo"><Link to="/" className="toolbar-logo">AT Web Development</Link></div>
        <div className="space"></div>
        <div className="toolbar-nav-links">
          <ul>
            <li><Link to="/About">About Me</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
