import React from 'react';

const Tag = (props) => {
   const tags = props.tags;
   return (
      <div className="tags">
         {tags.map((tag) => (
            <div className="tag" key={tag}>
               <img src={tag} alt="#" />
            </div>
         ))}
      </div>
   );
};

export default Tag;
