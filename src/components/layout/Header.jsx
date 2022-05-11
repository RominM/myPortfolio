import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
   return (
      <header>
         <Link to="/">RM</Link>
         <Nav />
      </header>
   );
};

export default Header;
