import React, { Fragment } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landingpage from "./Landingpage"
import Instaclone from "../App";
import Newpost from "./Newpost";

function Defaultpage(){
    return(
<Fragment>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Landingpage/>}/>
    <Route path="/instaclone" element={<Instaclone/>}/>
    <Route path ="/newpost" element={<Newpost/>}/>
    <Route path="*" element={<h1>Error 404 : Page Not Found</h1>}/>
</Routes>
</BrowserRouter>
</Fragment>
    )
}
export default Defaultpage;