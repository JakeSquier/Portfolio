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
        var elements = [document.getElementById('about'), document.getElementById('skills')]
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - window.innerHeight <= -50) {
              console.log('here')  
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