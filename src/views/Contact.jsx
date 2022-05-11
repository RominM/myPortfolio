import React from 'react';

const Contact = () => {
   return (
      <form action="" method="" className="contact-page section">
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
            <input type="text" name="message" id="message" required />
         </div>
         <div>
            <input type="submit" name="" id="" value="Envoyer" />
         </div>
      </form>
   );
};

export default Contact;
