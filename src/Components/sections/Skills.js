import React from 'react';
import "../../styles/skills.css";

class Skills extends React.Component {

    render(){

        return(
            <section className='skills-section hidden' id='skills'>
                <div id='skillsTitleContainer'>
                    <p id='skillsNum'>02.</p>
                    <h1 id='skillsTitle'>Skills</h1>
                    <hr id='skillsLine'/>
                </div>
                <div className='skills-content'>
                    <div className='skills-text'>
                        <p className='experience-text'>Since beginning my freelance developer journey I have collaborated on quite a few open source projects as well as, created a few web apps to convenience the lives small business owners. along the way I have collaborated with talented people and learned many things.</p>
                        <p className='knowledge-text'>I strive to create exceptional and responsive applications that are quick and used with ease. My main area of expertise lies in Front-end development using HTML, CSS and JS. I also carry proficient knowledge in Back-end development that ensures data is organized and managed to the best extent possible.</p>
                        <footer className='content-footer'>Visit my <span className='keyWord'>LinkedIn</span> profile or just <span className='keyWord'>contact</span> me.</footer>
                    </div>
                    <div className='skills-media'>
                        <div className='skills-progress-container'>
                            <div>
                                <label className='progress-label'>Front-end</label>
                                <div className='progress'><div id='filler1'></div></div>
                            </div>
                            <div>
                                <label className='progress-label'>Back-end</label>
                                <div className='progress'><div id='filler2'></div></div>
                            </div>
                            <div>
                                <label className='progress-label'>ReactJS</label>
                                <div className='progress'><div id='filler3'></div></div>
                            </div>
                            <div>
                                <label className='progress-label'>NodeJS</label>
                                <div className='progress'><div id='filler4'></div></div>
                            </div>
                            <div>
                                <label className='progress-label'>RoR</label>
                                <div className='progress'><div id='filler5'></div></div>
                            </div>
                        </div>
                        <div className='skills-index-container'>
                            <ul className='skills-index'>
                                <li className='technology'>
                                    React.js
                                </li>
                                <li className='technology'>
                                    Redux
                                </li>
                                <li className='technology'>
                                    Node.js
                                </li>
                                <li className='technology'>
                                    MongoDB
                                </li>
                                <li className='technology'>
                                    Azure
                                </li>
                                <li className='technology'>
                                    Ruby on Rails
                                </li>
                                <li className='technology'>
                                    HTML
                                </li>
                                <li className='technology'>
                                    Css
                                </li>
                                <li className='technology'>
                                    JavaScript
                                </li>
                                <li className='technology'>
                                    MUI
                                </li>
                                <li className='technology'>
                                    BootStrap
                                </li>
                                <li className='technology'>
                                    Java
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;