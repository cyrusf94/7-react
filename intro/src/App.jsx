import './App.css';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import Count from './components/Count/Count';
import React, { useState } from 'react';

function App() {

  let names = ["Aaron", "Kyle", "Cyrus", "Amanda", "Dante", "Angelina"]
  
  const [ links, setLinks ] = useState(["Intro", "Components", "Props", "States"])

  return (
    <React.Fragment>
    <Nav links={links}/>
    <header>React Lecture</header>
    {/*  Curly braces within return are expressions */}
    {names.map(name => <Welcome myName={name} />)}
    {<Count />}
    </React.Fragment>
    );
}

export default App;

/* 
  ? React
  * SPA = single page application
    * one index.html
    * vitualDOM renders components based on logic
    
    * Component 
      * building block of react interface
      * functional or class_based
      * return is what is rendered to the page
      
    * Componet lifecycle
      * import to the <App> component
      * mount it in the App's return()
    
    * Props (short for properties)
      * object allowing us to pass data from parent to children
      * read_only CANNOT be modified
      * passed as an attribute during mounting
      * extrapolated out of the funtion parameter
      ! can only travel from parent to child components  

    * State 
      * a way for react to store data that might change
      * triggers the re-render of component
      * a Hook
*/

