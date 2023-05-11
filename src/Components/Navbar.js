import React from "react";
import "../styles/navBar.css";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { IconButton } from '@material-ui/core';
import NotesSharpIcon from '@material-ui/icons/NotesSharp';

function Navbar() {

    const[showActions, setShowActions] = React.useState(1);
    const [lastYPos, setLastyPos] = React.useState(0);
    const [mobileNav, setMobileNav] = useState(false)

    React.useEffect(() => {

        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollUp = yPos < lastYPos;

            setShowActions(isScrollUp);
            setLastyPos(yPos);         
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll, false);
        }
    }, [lastYPos]);

    const miniNavClick = () => {
        var show = !mobileNav
        setMobileNav(show)
    }

    const miniOrReg = window.innerWidth < 500

    const showMini = mobileNav ? 'showMini' : 'hideMini'

    return(
        <motion.header animate={{ opacity: showActions ? 1 : 0 }} initial={{ opacity: 0 }}>
            <div id="nav">
                <div id="dropdownMenu">
                    <IconButton id="menuBtn" onClick={miniNavClick}>
                        <NotesSharpIcon id='menuIcon' />
                    </IconButton>
                </div>
                {miniOrReg ? 
                    <div className={'miniMenu ' + showMini}>
                        <ol id="navMenuMini">
                            <li className="navitem" id="aboutLink">
                                <a href='#about' className="link">
                                    <p className="num">01. </p>
                                    <p className="section">About</p>
                                </a>
                            </li>
                            <li className="navitem" id='skillsLink'>
                                <a href='#skills' className="link">
                                    <p className="num">02. </p>
                                    <p className="section">Skills</p>
                                </a>
                            </li>
                            <li className="navitem" id='projectsLink'>
                                <a href='#projects'className="link">
                                    <p className="num">03. </p>
                                    <p className="section">Projects</p>
                                </a>
                            </li>
                            <li className="navitem" id='contactLink'>
                                <a href='#contact' className="link">
                                    <p className="num">04. </p>
                                    <p className="section">Contact</p>
                                </a>
                            </li>
                        </ol>
                        <button id="resumeBtnMini">Resume</button>
                    </div>        
                :
                <div id="itemContainer">
                    <ol id="navMenu">
                        <li className="navitem" id="aboutLink">
                            <a href='#about' className="link">
                                <p className="num">01. </p>
                                <p className="section">About</p>
                            </a>
                        </li>
                        <li className="navitem" id='skillsLink'>
                            <a href='#skills' className="link">
                                <p className="num">02. </p>
                                <p className="section">Skills</p>
                            </a>
                        </li>
                        <li className="navitem" id='projectsLink'>
                            <a href='#projects'className="link">
                                <p className="num">03. </p>
                                <p className="section">Projects</p>
                            </a>
                        </li>
                        <li className="navitem" id='contactLink'>
                            <a href='#contact' className="link">
                                <p className="num">04. </p>
                                <p className="section">Contact</p>
                            </a>
                        </li>
                    </ol>
                    <button id="resumeBtn">Resume</button>
                </div>
                }
            </div>
        </motion.header>
    )
}

export default Navbar;