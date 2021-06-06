import './About.css';
import Oritpic from '../../Oritpic.jpeg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function About(props){
    return(
        <>
            {/* <div className="content"></div>
            <div className="FadeAway"></div>
            <div className="FadeAway-left"></div> */}
            <div>
            <h2 className = 'aboutTitle'>I'm() </h2>
            <h2 >download my  </h2>
            <button className = 'buttonResume'>resume </button>

            <p><GitHubIcon className = 'aboutResume'id="GitHubIcon"/></p>
            <p><LinkedInIcon className = 'aboutResume'id="LinkedInIcon"/></p>
            <h3 className = 'aboutContent'>
                I'm a full stack developer.
                <br/> based in London Ontario, Canada
                <br/>
                <h4>tools:</h4>
                <h5>JavaScript  CSS  HTML Python Node.js  react  Django<br/>
                                              Github Heroko ASW MongoDB Mongoose psql  <br/></h5>
            </h3>
            
           </div>
    
        </>
    )
}





export default About;