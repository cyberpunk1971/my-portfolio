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
        <li className="side-drawer-link"><Link to="/">HOME</Link></li>
        <li className="side-drawer-link"><Link to="/About">About</Link></li>
        <li className="side-drawer-link"><Link to="/Portfolio">Portfolio</Link></li>
      </ul>
    </nav>
  )
}
