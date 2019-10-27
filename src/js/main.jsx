// React
import React from 'react'
import ReactDOM from 'react-dom'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
import 'bootstrap'
import 'jquery'
import 'popper.js'
// Custom Components and Styles
import NavBar from "./navbar.jsx"
import Intro from "./intro.jsx"
import AboutMe from "./about.jsx"
import Experience from "./experience.jsx"
import Projects from "./projects.jsx"
import Education from "./education.jsx"
import '../css/main.css'


function MainPage() {
    return (
      <React.Fragment>
      <NavBar/>
      <div id="main">
        <div data-spy="scroll" data-target="#scroll-spyed-list" data-offset="0">
          <span id="intro"> </span>
          <Intro/>
          <span id="about"> </span>
          <AboutMe/>
          <span id="experience"> </span>
          <Experience/>
          <span id="projects"> </span>
          <Projects/>
          {/* <span id="education"> </span> */}
          {/* <Education/> */}
        </div>
      </div>    
      </React.Fragment>
    )
}

ReactDOM.render(<MainPage/>, document.getElementById("root"));

