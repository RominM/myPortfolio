import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './Routes/AnimatedRoutes';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import './style/sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
         <div className="App">
            <Header />
            <AnimatedRoutes />
            <Footer />
         </div>
      </Router>
   </React.StrictMode>
);
