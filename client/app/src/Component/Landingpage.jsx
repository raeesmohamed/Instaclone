import React, { Fragment } from "react";
import "../App.css";
// import { useNavigate } from "react-router-dom";
import Navbutton from "./Navbutton";
function Landingpage() {
  // const navigate = useNavigate();
  return (
    <Fragment>
      <div id="land-box">
        <div id="pic-box">
          <img src="images/Webimg.jpg" alt="webdevimage" />
        </div>
        <div id="button-box">
          <div id="headtext">Welcome to Insta-World</div>
          {/* <div><button id="mybtn" onClick={()=>{navigate("/instaclone")}}>Enter</button></div> */}

          <div id="mybtn">
            <Navbutton />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Landingpage;
