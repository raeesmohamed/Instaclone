import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function Newpost (){
    const [data,setData] = useState({})
    const navigate = useNavigate()
    const postData = (e)=>{
        e.preventDefault();
        console.log(data);
        let formData = new FormData();
        formData.append('img', data.img);
        formData.append('author', data.author);
        formData.append('location', data.location);
        formData.append('description', data.description);
        const config = {
            headers:{
                "content-type":"multipart/form-data"
            }
        }
     axios.post("https://raeesinsta.herokuapp.com//posts",formData,config).then((response)=>{console.log(response.data)});
     navigate("/instaclone");
    }
    return (
        <Fragment>
          <div id="external">
            <div id="outer">
                <form onSubmit={postData} method="POST">
                <div id="file"> <input type="file" name="img" accept="image" onChange={(e)=>{setData({...data,img:e.target.files[0]})}} />  </div>
               <input type="text" name="author" placeholder="author" onChange={(e)=>{setData({...data,author:e.target.value})}}/> <input type="text" name="location" placeholder="location" onChange={(e)=>{setData({...data,location:e.target.value})}}/>
                <div id="description"><input type="text" placeholder="Description" name="description"  onChange={(e)=>{setData({...data,description:e.target.value})}}/></div>
               <div id="post"><button id="mybtn1"  type="submit"  >Post</button></div>
                </form>
            </div>
            </div>            
        </Fragment>
    )
}

export default Newpost;