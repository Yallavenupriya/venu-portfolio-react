import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap } from "react-icons/si";

function Skills() {
  return (
    <div>
      <h1>SKILLS</h1>
      <h2>Frontend</h2>

      <p><SiHtml5 style={{ color: 'orangered' }} /> HTML</p>
      <p><SiCss3 style={{ color: 'blue' }} /> CSS3</p>
      <p><SiJavascript style={{ color: 'goldenrod' }} /> JavaScript</p>
      <p><SiBootstrap style={{ color: 'purple' }} /> Bootstrap</p><br /><br /> <hr color='red'/> <br />
    </div>
  )
}

export default Skills
