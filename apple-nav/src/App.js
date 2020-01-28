import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import NavWrapper from "./components/NavWrapper";
import SubNav from "./components/SubNav"

import './App.css';

function App() {
  return (
    <div className="App">
   <nav>
     <NavLink exact to="/nav-wrapper" className="navWrapper">
    <h1>Apple Navigation</h1>
    </NavLink>

</nav>

<Switch>
<Route exact path="/nav-wrapper">
	<NavWrapper/>
	</Route>
<Route exact path="/sub-nav">
	<SubNav />
	</Route>
	</Switch> 



    </div>
  );
}

export default App;
