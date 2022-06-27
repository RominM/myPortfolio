import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
   const resized = props.resized; //bool

   const handleMenu = () => {
      const navMenu = document.querySelector('.responsive-nav');

      navMenu.classList.remove('open');
      navMenu.classList.add('close');
      navMenu.style.display = 'none';
   };

   return (
      <nav className={resized ? 'nav-bar' : 'responsive-nav close'}>
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
   );
};

export default Nav;
