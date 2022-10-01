import React, { Fragment } from "react";
import "../App.css";
import { BsThreeDots,BsHeart,BsShareFill} from "react-icons/bs";


function Viewpost (props){
    let file=props.file;
    // console.log(props);
    return (
        <Fragment>
          <div>
 {
        file.map((value)=>{    
            console.log(value.img);
          return (
            <div id="content-box">
              <div id="top-section">
              <span><b>{value.author}</b></span><br/><span>{value.location}</span>
              <span id="three-dots"><BsThreeDots/></span>
              </div>
              <div id="mid-section">  
            <img src={"https://raeesinsta.herokuapp.com/"+value.img} alt="My-pic"></img>
              </div>
              <div id="bottom-section">
                <span><BsHeart/></span><span id="share"><BsShareFill/></span><span id="dt">{value.date}</span><br/>
                <span>{value.likes} likes</span><br/>
                <span><b>{value.description}</b></span>
              </div>
            </div>
          )
        })
      } 
      </div>
        </Fragment>
    )
}
export default Viewpost;