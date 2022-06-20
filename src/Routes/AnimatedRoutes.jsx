import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
import MyWork from '../views/MyWork';
import This from '../views/This';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
   const location = useLocation();
   return (
      <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<This />} />
            <Route path="/mywork" element={<MyWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </AnimatePresence>
   );
};

export default AnimatedRoutes;
