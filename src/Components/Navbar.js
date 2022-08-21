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

    return(
        <motion.header animate={{ opacity: showActions ? 1 : 0 }} initial={{ opacity: 0 }}>
            <div id="nav">
                <div id="dropdownMenu">
                    <IconButton id="menuBtn" >
                        <NotesSharpIcon />
                    </IconButton>
                    <div id="menuContent">
                        <a className="links-hidden">About</a>
                        <a className="links-hidden">Skills</a>
                        <a className="links-hidden">Projects</a>
                        <a className="links-hidden">Contact</a>
                    </div>
                </div>
                <div id="itemContainer">
                    <ol id="navMenu">
                        <li className="navitem">
                            <a href='#about' className="link">
                                <p className="num">01. </p>
                                <p className="section">About</p>
                            </a>
                        </li>
                        <li className="navitem">
                            <a href='#skills' className="link">
                                <p className="num">02. </p>
                                <p className="section">Skills</p>
                            </a>
                        </li>
                        <li className="navitem">
                            <a href='#projects'className="link">
                                <p className="num">03. </p>
                                <p className="section">Projects</p>
                            </a>
                        </li>
                        <li className="navitem">
                            <a href='#contact' className="link">
                                <p className="num">04. </p>
                                <p className="section">Contact</p>
                            </a>
                        </li>
                    </ol>
                    <button id="resumeBtn">Resume</button>
                </div>
            </div>
        </motion.header>
    )
}

export default Navbar;