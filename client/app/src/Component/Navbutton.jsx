import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
function Navbutton (){

    return(
        <Fragment>
            <button><NavLink to="/instaclone">Enter Here</NavLink></button>
        </Fragment>
    )

}
export default Navbutton;