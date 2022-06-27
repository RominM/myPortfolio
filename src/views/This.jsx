import React from 'react';
import Typewriter from 'typewriter-effect';
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
            <div className="content">
               <h2>this.</h2>
               <h1 className="neon">Romin_Manogil</h1>
               <span className="h1-bracket">(</span>
               <br></br>
               <div className="typical">
                  <Typewriter
                     options={{
                        strings: [
                           'front-end_developer 💻',
                           'coffee_lover ☕',
                           'sweet_dad 👨‍👧',
                           'musician 🎸',
                           'Nomad & Van lifer🚐',
                        ],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'type-animation',
                     }}
                  />
                  <span>);</span>
               </div>
            </div>
            <Network />
         </motion.main>
      </HelmetProvider>
   );
};

export default This;
