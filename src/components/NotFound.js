import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>Ops! It seems the page you're looking for doesn't exist.</p>
      <Link className="link_2" to={'/'}>
        <p>&lt; Back to list</p>
      </Link>
    </div>
  );
};

export default NotFound;
