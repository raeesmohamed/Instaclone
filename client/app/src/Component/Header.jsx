import React, { Fragment } from "react";
import "../App.css";
import {BsCameraFill} from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header (){
    return (
        <Fragment>
 <div id="main">
        <div id="header">
          <span id="App-logo"><FaReact size="2em" /></span>
      <span id="App-name"> Instaclone</span>
      <button id="cam-icon" ><NavLink to="/newpost"><BsCameraFill size="1.5em"/></NavLink></button>
      </div>
      </div>
        </Fragment>
    )
}
export default Header;