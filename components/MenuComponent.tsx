import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

export default function MenuComponent() {
  return (
    <div className="menu">
      <Link to='/'>Home</Link>
      {' '}
      <Link to='/nested'>Nested</Link>
      {' '}
      <Link to='/callback'>Callback</Link>
      {' '}
      <Link to='/old-connected'>Old connected</Link>
      {' '}
      <Link to='/new-connected'>New connected</Link>
    </div>
  );
}