import React from 'react';

const Contact = () => {
   return (
      <main className="contact-page section">
         <form action="" method="POST" className="formular">
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
               <input type="submit" name="submit" id="submit" value="Envoyer" />
            </div>
         </form>
      </main>
   );
};

export default Contact;
