import React from 'react';
import "../../styles/about.css";

const img0 = require('/Users/Jake.Squier/portfolioFinal/p0rtf0li0/src/images/cool.jpeg').default
const img1 = require('/Users/Jake.Squier/portfolioFinal/p0rtf0li0/src/images/elon.jpeg').default
const img2 = require('/Users/Jake.Squier/portfolioFinal/p0rtf0li0/src/images/flatiron.jpeg').default
const img3 = require('/Users/Jake.Squier/portfolioFinal/p0rtf0li0/src/images/homer.png').default


class About extends React.Component {
 
    state = {
        images: [img0, img1, img2, img3],
        currMedia: 0,
        currImage: img1
    }

    onWordClick = event => {
        this.setState({
            currImage: this.state.images[event.target.getAttribute('data-img')],
            currMedia: event.target.getAttribute('data-img')
        })
        console.log(this.state)
    }

    render(){

        return(
            <section className='about-section hidden' id='about'>
                <div id="aboutHeaderContainer">
                    <p id="aboutProjectNumber">01.</p>
                    <h1 id="aboutHeader">About Me</h1>
                    <hr id="aboutLine"/>
                </div>
                <div id="aboutContent">
                    <div className='about-content'>
                        <div id="aboutTextContainer">
                            {/* <p>Fast foward I am now a <a id="flatiron" data-img='2' onClick={this.onWordClick}>Flatiron</a> grad. I graduated from Flatiron's immersive SE program on December 4th, 2020, and became the <a id="youngest" data-img='0' onClick={this.onWordClick}>youngest</a> to graduate from the program. I love the pursuit of knowledge and enjoy making web applications that provide a user with an unforgettable experience. Most of all I, want to create applications that <a id="positive" data-img='3' onClick={this.onWordClick}>positively</a> impact society and spread happiness amongst its users, And one day become like this <a id='hero' data-img='1' onClick={this.onWordClick}>guy.</a></p> */}
                            <p className='intro-text'>Hello! My name is Jacob Squier I relish the idea of creating online software applications that bring convnience and joy. My interest in software began in middle school, I began writing batch scripts to tamper with my school laptop. Coding became the only thing that wasnt interupted by my <span id='keyWord'>ADHD</span>.</p>
                            <p className='present-text'>Fast-foward to present I am a <span id='keyWord'>Flatiron</span> grad, In fact I got to be one of the youngest to graduate due to the fact I enrolled at 17. I have been a freelance developer since then and am now beginning my job search as of July 2022. I stay curious and love to develope in general.</p>
                            <p className='ul-header'>Here are my current technology infatuations:</p>
                            <ul className='current-interests'>
                                <li className='technology'>
                                    JavaScript (ES6+)
                                </li>
                                <li className='technology'>
                                    React
                                </li>
                                <li className='technology'>
                                    Node.js
                                </li>
                                <li className='technology'>
                                    Mern Stack
                                </li>
                                <li className='technology'>
                                    Unity
                                </li>
                                <li className='technology'>
                                    Machine Learning
                                </li>
                            </ul>
                        </div>
                        <div id="aboutMediaContainer">
                            <img id='aboutMedia' src={this.state.currImage}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;