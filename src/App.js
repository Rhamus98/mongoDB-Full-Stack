import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import addrecord from './components/addrecord.components';
import showall from './components/showall.components';
import {NavBar} from './components/navbar.components';






function App() {

  return (
    <div>
      <NavBar/>
      <BrowserRouter>
      <Route exact path={"/addrecord"} component={addrecord}/>
      <Route exact path={"/showall"} component={showall}/>
      </BrowserRouter>
    </div> 
  );

}

export default App;