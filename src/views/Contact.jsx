import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Contact = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>RM - Contact</title>
         </Helmet>
         <motion.main
            className="contact-page section"
            intial={{ height: 0 }}
            aminate={{ height: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.7 } }}
         >
            <h2>.contact(</h2>
            <form
               action=""
               method="POST"
               className="formular"
               data-netlify="true"
            >
               <input type="hidden" name="form-name" value="contact" />
               <div>
                  <label htmlFor="lastname">Nom :</label>
                  <input type="text" name="lastname" id="lastname" required />
               </div>
               <div>
                  <label htmlFor="firstname">Prénom :</label>
                  <input type="text" name="firstname" id="firstname" required />
               </div>
               <div>
                  <label htmlFor="email">Email :</label>
                  <input type="email" name="email" id="email" required />
               </div>
               <div>
                  <label htmlFor="message">Message :</label>
                  <textarea
                     name="message"
                     id="message"
                     cols="30"
                     rows="10"
                  ></textarea>
               </div>
               <div>
                  <input
                     type="submit"
                     name="submit"
                     id="submit"
                     value="Envoyer"
                  />
               </div>
            </form>
            <span>);</span>
         </motion.main>
      </HelmetProvider>
   );
};

export default Contact;
