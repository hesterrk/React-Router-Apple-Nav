import React from 'react';
import { Route, useRouteMatch, NavLink, Switch } from 'react-router-dom';
import MacBook from "./Macbook";
import MacBookAir from "./MacbookAir";


function SubNav() {
    
    const { path, url } = useRouteMatch();

    
    return (
<div>
    
            <nav className='subNavNav'>
            <NavLink to={`${url}/macbook`}  > MacBook </NavLink>
             <NavLink to={`${url}/macbookair`}  > MacBook Air </NavLink>
         </nav>

<Switch>
<Route exact path={ `${path}/macbook` } >
<MacBook />
</Route>

<Route path= {`${path}/macbookair`}>
<MacBookAir />
</Route>
</Switch>

</div>

    );
}


export default SubNav;