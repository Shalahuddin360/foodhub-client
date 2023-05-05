import React from 'react';
import { NavLink } from 'react-bootstrap';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? 'text-warning font-bold' : ''
        }
      >
        {children}
      </NavLink>
    );
};

export default ActiveLink;