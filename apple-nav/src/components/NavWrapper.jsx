import React from 'react';
import {Route, NavLink } from 'react-router-dom';
import SubNav from "./SubNav";



function NavWrapper() {



    return (
<div className="navwrapperContainer">

<div className="unorderedList">
       
<NavLink to="/sub-nav">
        <ul>
        <li> Mac </li> 
        <li> Ipad </li>
        <li> Iphone </li>
        <li> Watch </li>
        <li> TV </li>
        <li> Music </li>
        </ul>
        </NavLink>
        </div>



       
<Route path="/sub-nav">
<SubNav />
</Route>



    


</div>

    );
}


export default NavWrapper;