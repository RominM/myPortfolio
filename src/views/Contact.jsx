import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Contact = () => {
   const initialState = {
      lastName: '',
      firstName: '',
      email: '',
      message: '',
      // checkbox: false,
   };
   const [formValues, setFormValues] = useState(initialState);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
   };

   useEffect(() => {
      console.log('formErrors : ', formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
         console.log('formValues : ', formValues);
      }
   }, [formErrors, isSubmit, formValues]);

   const validate = (values) => {
      const errors = {};
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

      if (!values.firstName) {
         errors.firstName = "Merci d'entrer votre Prénom";
      }

      if (!values.lastName) {
         errors.lastName = "Merci d'entrer votre Nom";
      }

      if (!values.email) {
         errors.email = "Merci d'entrer un email";
      } else if (!regex.test(values.email)) {
         errors.email = 'Email non valide (example@domain.com)';
      }

      if (!values.message) {
         errors.message = "Merci d'entrer votre message";
      }
      return errors;
   };

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
            {Object.keys(formErrors).length === 0 && isSubmit ? (
               <p className="validate">Votre message à bien été envoyé</p>
            ) : (
               <form
                  action=""
                  method="POST"
                  className="formular"
                  data-netlify="true"
                  onSubmit={handleSubmit}
               >
                  <input type="hidden" name="form-name" value="contact" />
                  <label htmlFor="lastName">Nom :</label>
                  <input
                     type="text"
                     name="lastName"
                     id="lastName"
                     value={formValues.lastName}
                     onChange={handleChange}
                  />
                  <p className="error-msg">{formErrors.lastName}</p>
                  <label htmlFor="firstName">Prénom :</label>
                  <input
                     type="text"
                     name="firstName"
                     id="firstName"
                     value={formValues.firstName}
                     onChange={handleChange}
                  />
                  <p className="error-msg">{formErrors.firstName}</p>
                  <label htmlFor="email">Email :</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     value={formValues.email}
                     onChange={handleChange}
                  />
                  <p className="error-msg">{formErrors.email}</p>
                  <label htmlFor="message">Message :</label>
                  <textarea
                     name="message"
                     id="message"
                     value={formValues.message}
                     onChange={handleChange}
                     cols="30"
                     rows="10"
                  ></textarea>
                  <p className="error-msg">{formErrors.message}</p>

                  {/* <label htmlFor="checkbox">
                  Autorisez vous à être contacter en retour ?
               </label>
               <input type="checkbox" name="checkbox" id="checkbox" value={formValues.checkbox}/> */}
                  <input
                     type="submit"
                     name="submit"
                     id="submit"
                     value="Envoyer"
                  />
               </form>
            )}
            <span>);</span>
         </motion.main>
      </HelmetProvider>
   );
};

export default Contact;
