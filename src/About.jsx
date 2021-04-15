import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/hotel-background-.jpg";
import Common from './Common';
const About =() => {
    return(
        <>
        <Common name='Welcome to About Page' 
        img src={web} 
        visit="/contact" 
        btname="Contact Now"/>
        <div className="container">

        </div>
 
        </>
    );
};

export default About;