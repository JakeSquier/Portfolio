import React from 'react';
import "../../styles/projects.css"
import { projectData } from "../../data/projectData";
import ProjectCard from './ProjectCard'
import '../../styles/projectsMini.css'
import pathing from '../../images/pathing.png'
import sorting from '../../images/sorting.png'
import codeit from '../../images/codeit.png'

const Projects = () => {


    const honorableMentions = () => {
        projectData.map(() => {

        })
    }

    if(window.innerWidth < 820) {
        return(
            <section className='projects-section-mini' id='projects'>
                <div id="headerContainer">
                    <p id="projectNumber">03.</p>
                    <h1 id="projectTitle">Projects</h1>
                    <hr id="projectLine" />
                </div>
                <div className='projects-container-mini'>
                    {
                        projectData.map((project) => {
                            var img;
                            if(project.title === 'Sorting Visualizer'){
                                img = sorting
                            } else if(project.title === 'Pathing Visualizer'){
                                img = pathing
                            } else {
                                img = codeit
                            }
                            if(project.featured === true){
                                return (
                                    <div className='featured-card-mini hidden' id={'project' + project.id}>
                                        <div className='content-mini'>
                                            <p className="featured-mini">Featured</p>
                                            <h1 className="project-title-mini" id="pTitle">{project.title}</h1>
                                            <div className="description-box-mini" id="pBox">
                                                <p>{project.description}</p>
                                            </div>
                                            <ul className="tech-list-mini" id="pList">
                                                {project.tech.map((tech) => {
                                                    return <li className="tech-mini">{tech}</li>
                                                })}
                                            </ul>
                                            <div className='btn-container-mini'>
                                                <a href={project.gitLink}>
                                                    <svg className="git-link-mini" id="pGit" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-lineJoin="round">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                                    </svg>
                                                </a>
                                                <a href={project.externalLink}>
                                                    <svg className="external-link-mini" id="pExt" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-lineJoin="round">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                                        <polyline points="15 3 21 3 21 9"/>
                                                        <line x1="10" y1="14" x2="21" y2="3"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='mini-img-wrapper'>
                                            <img  className='mini-img' src={img}/>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                
                <div className='projects-container-secondary'>
                    <h1 id='mentionTitle'>Honorable Mentions</h1>
                    <div id='mentionsContainer'>
                        {projectData.map((project, val) => {
                            if(project.featured === false){
                                return <ProjectCard project={project} val={val} />
                            }
                        })}
                    </div>
                </div>
            </section>
        )
   }

   var projectFeaturedCout = 0;

   return(
       <section className='projects-section' id='projects'>
           <div id="headerContainer">
               <p id="projectNumber">03.</p>
               <h1 id="projectTitle">Projects</h1>
               <hr id="projectLine" />
           </div>
           <div className="projects-container">
               {
               projectData.map((project) => {
                   if(project.featured === true){
                       projectFeaturedCout++;
                       if(projectFeaturedCout%2 != 0){
                           return(
                               <div className="project hidden" id={'project' + project.id}>
                                   <div className="project-content" id="pContent">
                                       <p className="featured" id="pFeatured">Featured</p>
                                       <h1 className="project-title" id="pTitle">{project.title}</h1>
                                       <div className="description-box" id="pBox">
                                           <div className="description" >{project.description}</div>
                                       </div>
                                       <ul className="tech-list" id="pList">
                                           {project.tech.map((tech) => {
                                               return <li className="tech">{tech}</li>
                                           })}
                                       </ul>
                                       <div className='btn-container'>
                                           <a href={project.gitLink}>
                                               <svg className="git-link" id="pGit" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-lineJoin="round">
                                                   <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                               </svg>
                                           </a>
                                           <a href={project.externalLink}>
                                               <svg className="external-link" id="pExt" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-lineJoin="round">
                                                   <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                                   <polyline points="15 3 21 3 21 9"/>
                                                   <line x1="10" y1="14" x2="21" y2="3"/>
                                               </svg>
                                           </a>
                                       </div>
                                   </div>
                                   <div className="project-image" id={`pImg${projectFeaturedCout}`}><a className='inner-image'></a></div>
                               </div>
                           )
                       }else{
                           return(
                               <div className="project-reverse hidden" id={'project' + project.id}>
                                   <div className="project-image-r" id="pReverseImg">
                                   </div>
                                   <div className="project-content-r" id="pReverseContent">
                                       <p className="featured-r" id="pReverseFeatured">Featured</p>
                                       <h1 className="project-title-r" id="pReverseTitle">{project.title}</h1>
                                       <div className="description-box-r" id="pReverseBox">
                                           <div className="description-r">{project.description}</div>
                                       </div>
                                       <ul className="tech-list-r" id="pReverseList">
                                           {project.tech.map((tech) => {
                                               return <li className="tech-r">{tech}</li>
                                           })}
                                       </ul>
                                       <div className='btn-container-r'>
                                           <a href={project.gitLink}>
                                               <svg className="git-link" id="pReverseGit" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-lineJoin="round">
                                                   <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                               </svg>
                                           </a>
                                           <a href={project.externalLink}>
                                               <svg className="external-link" id="pReverseExt" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-lineJoin="round">
                                                   <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                                   <polyline points="15 3 21 3 21 9"/>
                                                   <line x1="10" y1="14" x2="21" y2="3"/>
                                               </svg>
                                           </a>
                                       </div>
                                   </div>
                               </div> 
                           )
                       }
                   } else if(project.featured === true){
                       return(
                           <div className="project" id="pContainer">
                               <div className="project-content" id="pContent">
                                   <p className="featured" id="pFeatured">Featured</p>
                                   <h1 className="project-title" id="pTitle">{project.title}</h1>
                                   <div className="description-box" id="pBox">
                                       <div className="description" >{project.description}</div>
                                   </div>
                                   <ul className="tech-list" id="pList">
                                       {project.tech.map((tech) => {
                                           return <li className="tech">{tech}</li>
                                       })}
                                   </ul>
                                   <div className='btn-container'>
                                       <a href={project.gitLink}>
                                           <svg className="git-link" id="pGit" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-lineJoin="round">
                                               <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                           </svg>
                                       </a>
                                       <a href={project.externalLink}>
                                           <svg className="external-link" id="pExt" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-lineJoin="round">
                                               <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                               <polyline points="15 3 21 3 21 9"/>
                                               <line x1="10" y1="14" x2="21" y2="3"/>
                                           </svg>
                                       </a>
                                   </div>
                               </div>
                           </div>
                       )
                   }
               })}
           </div>
           <div className='projects-container-secondary'>
               <h1 id='mentionTitle'>Honorable Mentions</h1>
               <div id='mentionsContainer'>
                   {projectData.map((project, val) => {
                       if(project.featured === false){
                           return <ProjectCard project={project} val={val} />
                       }
                   })}
               </div>
           </div>
       </section>
   )
}

export default Projects;