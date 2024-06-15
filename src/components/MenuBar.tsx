import React from 'react';
import classes from './MenuBar.module.css';
import { Link } from 'react-router-dom';
const MenuBar: React.FC = () => {
  return (
    <div className={classes.list}>
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>
        <li>
          <Link to={'/contact-us'} state={{ id: 1 }}>
            {' '}
            Contact Us{' '}
          </Link>
        </li>
        <li>
          <Link to={'/product'}> Product </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
