import React from 'react';
import Card from '../components/Card';
import projects from './../data/projects.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

const MyWork = () => {
   projects.sort((a, b) => (a.id > b.id ? -1 : 1));

   return (
      <HelmetProvider>
         <Helmet>
            <title>RM - My Work</title>
         </Helmet>
         <motion.main
            className="mywork-page section"
            id="top"
            intial={{ height: 0 }}
            aminate={{ height: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.7 } }}
         >
            <h2>my_work(</h2>
            <ul className="projects">
               {projects.map((project) => (
                  <li key={project.id} className="card">
                     <Card
                        id={project.id}
                        title={project.title}
                        descript={project.descript}
                        cover={project.cover}
                        tags={project.tags}
                        href={project.link}
                     />
                  </li>
               ))}
            </ul>
            <span>);</span>
            <a href="#top" className="mouse">
               to the top
            </a>
         </motion.main>
      </HelmetProvider>
   );
};

export default MyWork;
