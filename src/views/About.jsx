import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>RM - About</title>
         </Helmet>
         <motion.main
            className="about-page section"
            intial={{ height: 0 }}
            aminate={{ height: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.7 } }}
         >
            <h2>about(</h2>
            <h3 className="subtitle">This is who I am...</h3>
            <p>
               Hi, 👋 my name is Romin Manogil, <br />
               I'm a young Front-end developer of 32 years old. Although my
               background is not only based in the IT field, I discovered a
               passion for programming. I discovered JavaScript in 2021 for the
               first time. I must confess that was not a really frendly meeting,
               but we got to know each other and now we begin to share beautiful
               things...
               <br />
               <br />
               Like I said before, my way was strewn with pitfalls. When I was
               16 year old, like every child of this age, I wascompletely lost.
               <br />I practiced karate intensively and my senseï wanted me to
               join the national team.
               <br />
               At the same time, I was playing guitar a big part of my free
               time.
            </p>
            <span>);</span>
         </motion.main>
      </HelmetProvider>
   );
};

export default About;
