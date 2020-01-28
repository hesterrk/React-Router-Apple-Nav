import React from 'react';
import {Route, NavLink, useRouteMatch } from 'react-router-dom';
import SubNav from "./SubNav";



function NavWrapper() {

    const { path, url } = useRouteMatch();


    return (
<div className="navwrapperContainer">
        <p>What Product Would You Like to Look at Today?</p>

<div className="unorderedList">
       
<NavLink to={`${url}/sub-nav`}>
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



       
<Route exact path={ `${path}/sub-nav` } >
<SubNav />
</Route>



    


</div>

    );
}


export default NavWrapper;