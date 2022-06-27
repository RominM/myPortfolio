import React from 'react';
import { useState } from 'react';
import Tag from './Tag';

const Card = (props) => {
   const [choices, setChoices] = useState(false);
   const handleChoices = () => {
      setChoices(true);
   };

   return (
      <div onClick={handleChoices}>
         <div className="card__cover">
            <img src={props.cover} alt={props.title} />
         </div>
         <div className="features">
            <h3>{props.title}</h3>
            <p>{props.descript}</p>
            <div className="tags">
               <Tag tags={props.tags} id={props.id} />
            </div>
         </div>
         {choices && (
            <div className="">
               <button>Source code</button>
               <button>Website</button>
            </div>
         )}
      </div>
   );
};

export default Card;
