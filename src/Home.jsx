import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/hall.jpg";
import Common from './Common';
const Home =() => {
    return(
        <>
        <Common name="The Lap of luxury" 
        img src={web} 
        visit="/service" 
        btname="Get Started"/>
        </>
    );
};

export default Home;