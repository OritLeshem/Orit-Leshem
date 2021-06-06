import React from 'react';
import './Projects.css';
import '../../App.js'
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';
function Projects(props) {
  return (
      <div>
       <h1 className = 'aboutTitle'>Projects() </h1>
       <nav class="nav">
            <p><a href="https://oritleshem.github.io/GUESSTHEWORD/">'Find the word' <br/>js , html , css</a></p>
            <p><a href="https://hotel-room-service.herokuapp.com/">'Room-Service' <br/> Node.js</a></p>
            <p><a href="https://playdog-playdate.herokuapp.com/dogs/">'Play-dog' <br/>Django , Python</a></p>
            <p><a href="https://playdog-playdate.herokuapp.com/dogs/">'watcer' <br/>React</a></p>
            
        
</nav>
      </div>
  );
}

export default Projects;
