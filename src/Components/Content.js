import React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

class Content extends React.Component {
    
    render(){
        return(
            <div className='content' style={{}}>
                <Landing />
                <About />
                <Skills />
                <Projects state={this.props.state}/>
                <Contact />
            </div>
        )
    }
}

export default Content