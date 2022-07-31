import './App.css';
import  Navbar  from './components/Navbar';
import {
  Switch,
  Route,
} from "react-router-dom";
import SideBar from './components/SideBar';
import React, {useState} from 'react';
import Home from './components/Home.js';
import Email from './components/Email.js';
import Phone from './components/Phone.js';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [isOpen, setIsOpen]  = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <SideBar isOpen={isOpen}  toggle ={toggle}/>
      <Navbar toggle = {toggle}/>
       <Switch>                
             <Route path='/skills'>
                 <Skills/>
            </Route> 
            <Route path='/projects'>
                 <Projects/>
            </Route>               
            <Route exact path='/'>
                 <Home/>
            </Route> 
            <Route exact path='/email'>
                 <Email/>
            </Route>
            <Route exact path='/phone'>
                 <Phone/>
            </Route>
          </Switch>
          </div>
  );
}

export default App;
