import React from 'react';
import Typical from 'react-typical';
import Typewriter from 'typewriter-effect';
import '../../styles/landing.css'

class Landing extends React.Component {

    render(){

        return(
            <section className='landing-section'>
                <h1 id='welcome'>Welcome, my name is</h1>
                <h2 id='name'>Jacob Squier.</h2>
                <h2 className='phrase-text'>I build things for the web.</h2>
                <p className='landing-text'>
                    I'm a Software engineer based out of Houston, Texas who specializes in building and designing astounding software-related experiences. Currently, I am freelancing while pursuing a position in the industry.
                </p>
                <button className='landing-btn'>Check Out My LinkedIn!</button>
            </section>
        )
    }
}

export default Landing;