import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="footer">

      <FontAwesomeIcon icon="envelope" />
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
      <FontAwesomeIcon icon={["fab", "github"]} />
    </footer>
  )
}
