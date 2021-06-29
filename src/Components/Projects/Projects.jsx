import React from "react";
import "./Projects.css";
import "../../App.js";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

function Projects(props) {
  return (
    <div className="project-content">
      <h1 className="aboutTitle">Projects() </h1>
      <span>
        <a href="https://oritleshem.github.io/GUESSTHEWORD/">
          Find the word <br />
        </a>
        JavaScript HTML CSS <br />
        <a href="https://github.com/OritLeshem/GUESSTHEWORD">GitHub</a>
      </span>
      <br />
      <br />
      <br />
      <span>
        <a href="https://hotel-room-service.herokuapp.com/">
          Room-Service <br /> Node.js MongoDB Mongoose Heroku
          <br />
          <a href="https://oritleshem.github.io/GUESSTHEWORD/">GitHub</a>
        </a>
      </span>
      <br />
      <br />
      <br />
      <span>
        <a href="https://playdog-playdate.herokuapp.com/dogs/">
          Play-dog <br />
          Django Python PostgreSQL Heroku ASW S3
        </a>
        <br />
        <a href="https://github.com/OritLeshem/playdog-project3">GitHub</a>
      </span>
      <br />
      <br />
      <br />
      <span>
        <a href="https://palmpatrol.herokuapp.com/">
          Palm-Patrol <br />
          React node.js MongoDB Mongoose Heroku
          <br />
          <a href="https://github.com/OritLeshem/palm-patrol">GitHub</a>
        </a>
      </span>
    </div>
  );
}

export default Projects;
