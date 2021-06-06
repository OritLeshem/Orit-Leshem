import React from 'react';
import './Skills.css'
import { ReactComponent as Django } from "./django.svg";
import { ReactComponent as Css } from "./css3.svg";
import { ReactComponent as Python } from "./python.svg";



function Skills(props) {
  return (
      <div>
        Skills
        
        <i id= 'b-skill' className="fab fa-css3-alt"></i>
        <i id= 'b-skill' className="fab fa-html5"></i>
        <i id= 'b-skill' className="fab fa-js-square"></i>
        <i id= 'b-skill' className="fab fa-node-js"></i>
        <i id= 'b-skill' className="fab fa-aws"></i>
        <i id= 'b-skill' className="fab fa-react"></i>
        <i id= 'b-skill' className="fab fa-python"></i>
        <Django id='icon-language'/>
        <Css id='icon-language'/>
        <Python id='icon-language'/>
      </div>
  );
}

export default Skills;
