import React, { useState } from 'react';

const Hamburger = (props) => {
   const showMenuIcon = props.style;
   const [toggle, setToggle] = useState(false);

   const handleMenu = () => {
      const navMenu = document.querySelector('.responsive-nav');
      !toggle
         ? navMenu.classList.add('open')
         : navMenu.classList.remove('open');
      toggle
         ? navMenu.classList.add('close')
         : navMenu.classList.remove('close');
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
