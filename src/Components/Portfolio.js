import React from "react";
import Navbar from "./Navbar";
import LeftMargin from "./LeftMargin";
import RightMargin from "./RightMargin";
import Content from "./Content"
import { connect } from "react-redux";

class Portfolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            screenWidth: window.innerWidth
        }
    }

    componentDidMount(){
        window.addEventListener('resize', () => {this.setState({screenWidth: window.innerWidth})})
        window.addEventListener('scroll', this.checkPosition);
    }
    
    checkPosition() {
        var elements = [
            document.getElementById('about'), 
            document.getElementById('skills'), 
            document.getElementById('project1'), 
            document.getElementById('project2'),
            document.getElementById('project3'), 
            document.getElementById('contact'),
            document.getElementById('card3'),
            document.getElementById('card4'),
            document.getElementById('card5'),
            document.getElementById('card6'),
            document.getElementById('card7'),
            document.getElementById('card8'),
        ]
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - window.innerHeight <= -50) { 
              element.classList.add('start');
              element.classList.remove('hidden');
            }
        }
    }

    render(){
        return(
            <>
                <Navbar />
                <LeftMargin />
                <RightMargin />
                <Content state={this.state} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Portfolio);