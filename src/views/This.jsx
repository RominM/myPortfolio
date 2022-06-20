import React from 'react';
import Typical from 'react-typical';
import Network from '../components/Network';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

const This = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>RM - Home</title>
         </Helmet>
         <motion.main
            className="this-page section"
            intial={{ height: 0 }}
            aminate={{ height: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.7 } }}
         >
            <h2>this.</h2>
            <h1 className="neon">Romin_Manogil</h1>
            <span className="h1-bracket">(</span>
            <br></br>
            <div className="typical">
               <Typical
                  steps={[
                     'front-end_developer 💻',
                     2200,
                     'coffee_lover ☕',
                     2200,
                     'sweet_dad 👨‍👧',
                     2200,
                     'musician 🎸',
                     2200,
                     'Nomad & Van lifer🚐',
                     2000,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                  className="type-animation"
               />
               <span>);</span>
            </div>
            <Network />
         </motion.main>
      </HelmetProvider>
   );
};

export default This;
