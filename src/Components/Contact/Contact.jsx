import React from "react";
import CallEndIcon from "@material-ui/icons/CallEnd";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";
import { pink } from "@material-ui/core/colors";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
      <div id="icon-phone">
        5199330049 <br />
        azmono@gmail.com
      </div>
      <a href="https://github.com/OritLeshem/">
        <GitHubIcon id="icon-github" />
      </a>
      <br />
      <a href="https://www.linkedin.com/in/orit-leshem-413ba5179//">
        <LinkedInIcon id="icon-linkedin" />
      </a>
      <br />

      {/* <SmartphoneIcon id="icon-phone" /> */}
      <br />

      {/* <AlternateEmailIcon id="icon-mail" /> */}
      <br />
    </div>
  );
}

export default Contact;
