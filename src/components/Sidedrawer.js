import React from 'react';
import { Link } from 'react-router-dom';
import './Sidedrawer.css';

export default function Sidedrawer(props) {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/" className="side-drawer-link">HOME</Link></li>
        <li><Link to="/About" className="side-drawer-link">About</Link></li>
      </ul>
    </nav>
  )
}
