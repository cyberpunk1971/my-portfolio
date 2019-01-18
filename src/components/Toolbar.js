import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../components/ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Toolbar.css';

export default function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar-nav">
        <div className="toolbar-toggle-btn">
          <ToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar-logo"><Link to="/" className="toolbar-logo">The Digital Desert</Link></div>
        <div className="space"></div>
        <div className="toolbar-nav-links">
          <ul>

            <li><a href="mailto:adt71@cox.net">
              <FontAwesomeIcon icon="envelope" className="abt-link" /></a></li>
            <li><a href="https://github.com/cyberpunk1971">Github</a></li>
            <li><Link to="/About" className="abt-link">About</Link></li>
            <li><Link to="/" className="abt-link">Home</Link></li>

          </ul>
        </div>
      </nav>
    </header>
  )
}
