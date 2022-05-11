import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import projects from './../data/projects.json';

const MyWork = () => {
   projects.sort((a, b) => (a.id > b.id ? -1 : 1));
   return (
      <section className="mywork-page section">
         <h2>my_work(</h2>
         <ul className="projects">
            {projects.map((project) => (
               <a href={project.link} key={project.id}>
                  <Card
                     id={project.id}
                     title={project.title}
                     descript={project.descript}
                     cover={project.cover}
                     tags={project.tags}
                  />
               </a>
            ))}
         </ul>
         <span>);</span>
      </section>
   );
};

export default MyWork;
