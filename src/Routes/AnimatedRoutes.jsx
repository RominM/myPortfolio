import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
import MyWork from '../views/MyWork';
import This from '../views/This';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';

const AnimatedRoutes = () => {
   const location = useLocation();
   const [windowWidth, setWindowWidth] = useState(0);

   useEffect(() => {
      updateWindowWidth();

      window.addEventListener('resize', updateWindowWidth);
      return () => {
         window.removeEventListener('resize', updateWindowWidth);
      };
   }, []);

   const updateWindowWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
   };

   const responsive = {
      resized: windowWidth > 900,
   };

   return (
      <>
         <Header resized={responsive.resized} />
         <AnimatePresence>
            <Routes location={location} key={location.pathname}>
               <Route path="/" element={<This />} />
               <Route path="/mywork" element={<MyWork />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </AnimatePresence>
      </>
   );
};

export default AnimatedRoutes;
