import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/room-1.jpeg";
const Card =(props) => {
    return(
        <>
              <div className = "col-md-4 col-10 mx-auto">
              <div className = "card">
                <img src={props.imgsrc} className = "card-img-top" alt={props.imgsrc}/>
                   <div className = "card-body">
                    <h5 className = "card-title font-weight-bold">{props.title}</h5>
                      <p className = "card-text">Your Comfort is here.</p>
                    <NavLink to="" className ="btn btn-primary">Explore</NavLink>
                </div>
            </div>
            </div>
        </>
    );
};

export default Card;