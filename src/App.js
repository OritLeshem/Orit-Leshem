import React, { Component } from 'react';
import './App.css';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='component'>
          <div id='navdiv' className='navdiv'>
              <p><Link to = '/about'>.I'm()</Link></p>
              <p><Link to = '/projects'>.Projects()</Link></p>
              <p><Link to = '/contact'>.contact()</Link></p>
              <p><GitHubIcon id="icon"/></p>
              <p><LinkedInIcon id="icon"/></p>
              
          </div>
        </nav>
        
        <Switch>  
          <Route path='/about' render={(props) => (
          <About {...props}/>
              )}/>
          <Route path='/projects' render={(props) => (
          <Projects {...props}/>
              )}/>
          
          <Route path='/contact' render={(props) => (
          <Contact {...props}/>
              )}/>
        </Switch>      

        
       
      </div>
    );
  }
}


export default App;
