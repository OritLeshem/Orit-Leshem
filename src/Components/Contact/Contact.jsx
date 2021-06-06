import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { pink } from '@material-ui/core/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Contact(props) {
  return (
      <div>
        Contact
        <GitHubIcon style={{ color: pink[200],fontSize: 23 }}/>
        <LinkedInIcon style={{ color: pink[200],fontSize: 25 }}/>
      </div>
  );
}

export default Contact;
