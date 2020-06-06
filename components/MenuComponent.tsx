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
      <Link to='/form'>Form</Link>
      {' '}
      <Link to='/high-order'>High order</Link>
      {' '}
      <Link to='/old-connected'>Old connected</Link>
      {' '}
      <Link to='/new-connected'>New connected</Link>
      {' '}
      <Link to='/new-async'>New async</Link>
      {' '}
      <Link to='/new-async2'>New async 2</Link>
      {' '}
      <Link to='/styled'>New async 2</Link>
    </div>
  );
}