import React, { Fragment } from "react";
import {useEffect,useState} from "react";
import axios from "axios";
import Header from "./Component/Header";
import Viewpost from "./Component/View";

function Instaclone (){
  const [post,Setpost] =  useState([]);


  const getdata = ()=>{
    axios.get("https://raeesinsta.herokuapp.com/posts").then((response)=>{
      console.log(response.data)
      Setpost(response.data)
    }).catch((e)=>{console.log(e.message)})
  }
  useEffect(getdata,[]);
  return(
    <Fragment>
<Header/>
<Viewpost file={post} />
    </Fragment>
  )
}
export default Instaclone;

