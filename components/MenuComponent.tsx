import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

export default function MenuComponent() {
  return (
    <div className="menu">
      <Link to='/'>Home</Link>
    </div>
  );
}