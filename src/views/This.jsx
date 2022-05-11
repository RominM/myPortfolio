import React from 'react';
import Typical from 'react-typical';
import Network from '../components/Network';

const This = () => {
   return (
      <section className="this-page section">
         <h2>this.</h2>
         <h1 className="neon">Romin_Manogil</h1>
         <span className="h1-bracket">(</span>
         <br></br>
         <div className="typical">
            <Typical
               steps={[
                  'front-end_developer 💻',
                  2200,
                  'sweet_dad 👨‍👧',
                  2200,
                  'coffee_lover ☕',
                  2200,
                  'musician 🎸',
                  2200,
               ]}
               loop={Infinity}
               wrapper="b"
               className="type-animation"
            />
            <span>);</span>
         </div>
         <Network />
      </section>
   );
};

export default This;
