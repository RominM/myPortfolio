import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';
import Nav from './Nav';

const Header = (props) => {
   const resized = props.resized;

   const showNav = {
      display: resized ? 'block' : 'none',
   };
   const showMenuIcon = {
      display: resized ? 'none' : 'block',
   };
   return (
      <header>
         <Link to="/" className="rm-title">
            RM
         </Link>

         <Hamburger style={showMenuIcon} />
         <Nav id="nav_container" style={showNav} resized={resized} />
      </header>
   );
};

export default Header;
