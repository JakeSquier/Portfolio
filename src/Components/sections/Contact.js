import React from 'react';
import '../../styles/contact.css'

class Contact extends React.Component {

    render(){

        return(
            <section className='contact-section' id='contact'>
                <p id='contactTitle'>04. Contact me!</p>
                <h1 id='contactHeader'>Give Me a Ping</h1>
                <p id='contactText'>I am actively looking for any new job oppurtunities. I can take on any positions that assume the role as a front-end dev, back-end dev, and even full-stack. I will do my best to get back to any inqueries as soon as possible!</p>
                <button className='contact-btn'>Say hi!</button>
            </section>
        )
    }
}

export default Contact;