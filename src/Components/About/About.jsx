import "./About.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function About(props) {
  return (
    <div>
      <div className="content"></div>
      <div className="FadeAway"></div>
      <div className="FadeAway-left"></div>
      <div className="discription">
        <h1 className="aboutTitle">I'm() </h1>
        {/* <p>
          <GitHubIcon className id="GitHubIcon" />
        </p>
        <p>
          <LinkedInIcon className id="LinkedInIcon" />
        </p> */}

        <h2 className="aboutContent">
          {" "}
          I'm a Full Stack Developer;
          {/* <br /> based in London Ontario, Canada */}
          <br />
        </h2>
        <h2 className="aboutSkillsTitle">tools:</h2>
        <span className="aboutSkillsTitle">
          JavaScript HTML CSS
          <br /> Node.js React Python Django
          <br /> MongoDB Mongoose PostgreSQL
          <br /> GitHub Heroku ASW jQuery
        </span>
        <p className="aboutSkillsTitle">
          {" "}
          <br />
          <br />
          download my
          <Link to="../../../OritLeshem.pdf" target="_blank" download>
            <button className="buttonResume">resume </button>
          </Link>{" "}
        </p>
      </div>
      {/* <div id='rectangle'></div>
           <div className='lineAnimation'></div>   */}
    </div>
  );
}

export default About;
