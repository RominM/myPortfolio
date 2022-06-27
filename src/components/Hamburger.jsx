import React, { useState } from 'react';

const Hamburger = (props) => {
   const showMenuIcon = props.style;
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

   return (
      <div className="hamburger-menu" style={showMenuIcon} onClick={handleMenu}>
         <div className={toggle ? 'toggle-top' : 'bar-top'}></div>
         <div className={toggle ? 'toggle-middle' : 'bar-middle'}></div>
         <div className={toggle ? 'toggle-bottom' : 'bar-bottom'}></div>
      </div>
   );
};

export default Hamburger;
