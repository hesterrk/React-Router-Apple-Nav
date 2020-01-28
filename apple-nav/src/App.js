import React from 'react';
import NavWrapper from "./components/NavWrapper";
import { Link }  from 'react-router-dom';


import './App.css';

function App() {

  return (
    <div className="App">
      <div className="headerandbutton">
   <nav className="navWrapper">
    <h1 className="welcomeheader">Welcome to Apple </h1>
</nav>

<div className="homebuttonFlex">
<Link to="./nav-wrapper"><button className="homebutton">
				Home
			</button> </Link>
      </div>
      </div>

  <NavWrapper />



    </div>
  );
}

export default App;
