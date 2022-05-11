import React from 'react';
import Tag from './Tag';

const Card = (props) => {
   return (
      <li className="card">
         <div className="card__cover">
            <img src={props.cover} alt="" />
         </div>
         <div className="features">
            <h3>{props.title}</h3>
            <p>{props.descript}</p>
            <div className="tags">
               <Tag tags={props.tags} id={props.id} />
            </div>
         </div>
      </li>
   );
};

export default Card;
