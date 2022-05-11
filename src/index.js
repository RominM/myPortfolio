import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import MyWork from './views/MyWork';
import About from './views/About';
import Contact from './views/Contact';
import This from './views/This';
import Footer from './components/layout/Footer';
import './style/sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
         <div className="App">
            <Header />
            <Routes>
               <Route path="/" element={<This />} />
               <Route path="/mywork" element={<MyWork />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   </React.StrictMode>
);
