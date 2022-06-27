import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Hamburger from '../Hamburger';
// import Nav from './Nav';

const Header = (props) => {
   const resized = props.resized;

   const showNav = {
      display: resized ? 'block' : 'none',
   };
   const showMenuIcon = {
      display: resized ? 'none' : 'block',
   };

   const [toggle, setToggle] = useState(false);

   const handleMenu = () => {
      const navMenu = document.querySelector('.responsive-nav');
      if (!toggle) {
         navMenu.style.display = 'block';
         navMenu.classList.add('open');
         navMenu.classList.remove('close');
      } else {
         navMenu.style.display = 'none';
         navMenu.classList.remove('open');
         navMenu.classList.add('close');
      }
      setToggle(!toggle);
   };
   // const handleMenu = () => {
   //    const navMenu = document.querySelector('.responsive-nav');

   //    navMenu.classList.remove('open');
   //    navMenu.classList.add('close');
   //    navMenu.style.display = 'none';
   // };
   return (
      <header>
         <Link to="/" className="rm-title">
            RM
         </Link>
         {/* <Hamburger style={showMenuIcon} /> */}
         <div
            className="hamburger-menu"
            style={showMenuIcon}
            onClick={handleMenu}
         >
            <div className={toggle ? 'toggle-top' : 'bar-top'}></div>
            <div className={toggle ? 'toggle-middle' : 'bar-middle'}></div>
            <div className={toggle ? 'toggle-bottom' : 'bar-bottom'}></div>
         </div>
         {/* <Nav id="nav_container" style={showNav} resized={resized} /> */}
         <nav
            className={resized ? 'nav-bar' : 'responsive-nav close'}
            style={showNav}
         >
            <ul>
               <li>
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive ? 'active' : 'inactive'
                     }
                     onClick={handleMenu}
                  >
                     this()
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/mywork"
                     className={({ isActive }) =>
                        isActive ? 'active' : 'inactive'
                     }
                     onClick={handleMenu}
                  >
                     my_work()
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     className={({ isActive }) =>
                        isActive ? 'active' : 'inactive'
                     }
                     onClick={handleMenu}
                  >
                     about()
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/contact"
                     className={({ isActive }) =>
                        isActive ? 'active' : 'inactive'
                     }
                     onClick={handleMenu}
                  >
                     contact()
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
