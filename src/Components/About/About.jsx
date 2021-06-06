import './About.css';
import '../../App.js'


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function About(props){
    return(
        <div>
            <div className="content"></div>
            <div className="FadeAway"></div>
            <div className="FadeAway-left"></div>
            <div className ="discription">
                    <h1 className = 'aboutTitle'>I'm() </h1>
                    <p><GitHubIcon className id="GitHubIcon"/></p>
                    <p><LinkedInIcon className id="LinkedInIcon"/></p>
                    <p className='aboutSkills' >download my   <button className = 'buttonResume'>resume </button> </p>
                    <h2 className='aboutContent'> I'm a full stack developer.
                        <br/> based in London Ontario, Canada
                        <br/>
                        <br/>
                    </h2>    
                        <h2 className='aboutSkillsTitle'>tools:</h2>
                        <span className='aboutSkills'>JavaScript  CSS  HTML Python Node.js  react  Django<br/>
                        Github Heroko ASW MongoDB Mongoose psql <br/> </span>
                        
                    
            
           </div>
           {/* <div id='rectangle'></div>
           <div className='lineAnimation'></div>   */}
             
    
        </div>
    )
}





export default About;