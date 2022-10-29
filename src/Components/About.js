import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div className="history-navbar">
      <h1>Learn a little bit more about our services</h1>

      <nav>
        <Link to="/about/history">Avatier</Link>
        <Link to="/about/broadcom">Broadcom</Link>
        <Link to="/about/fischer">Fischer Identity</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default About;
