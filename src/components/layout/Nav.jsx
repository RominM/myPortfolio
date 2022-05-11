import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <nav>
         <ul>
            <li>
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     isActive ? 'active' : 'inactive'
                  }
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
               >
                  contact()
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
