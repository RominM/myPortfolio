import React from 'react';
import githubLOGO from './../assets/svg/github-tile.svg';
import whatsappLOGO from './../assets/svg/whatsapp-tile.svg';
import linkedinLOGO from './../assets/svg/linkedin-tile.svg';

const Network = () => {
   return (
      <div className="network">
         <a
            href="https://github.com/RominM"
            className="github-logo network__logo"
            target="_blank"
            rel="noreferrer"
         >
            <img src={githubLOGO} alt="github logo" />
            <span className="hover-effect"></span>
         </a>
         <a href="tel:+33603694664" className="whatsapp-logo network__logo">
            <img src={whatsappLOGO} alt="whatsapp logo" />
            <span className="hover-effect"></span>
         </a>
         <a
            href="https://www.linkedin.com/in/romin-manogil-48aa3ab8/"
            className="linkedin-logo network__logo"
            target="_blank"
            rel="noreferrer"
         >
            <img src={linkedinLOGO} alt="linkedin logo" />
            <span className="hover-effect"></span>
         </a>
      </div>
   );
};

export default Network;
