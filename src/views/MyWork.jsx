import React from 'react';
import Card from '../components/Card';
import projects from './../data/projects.json';
import mouse from './../assets/svg/computer-mouse-solid.svg';

const MyWork = () => {
   projects.sort((a, b) => (a.id > b.id ? -1 : 1));

   return (
      <main className="mywork-page section" id="top">
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
         <a href="#top" className="mouse">
            to the top
         </a>
      </main>
   );
};

export default MyWork;
