import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <p>
      Ops! It seems the page you're looking for doesn't exist.{' '}
      <Link className="link_2" to={'/'}>
        <p>&lt; Back to list</p>
      </Link>
    </p>
  );
};

export default NotFound;
