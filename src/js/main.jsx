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
import '../css/main.css'

function Intro() {
  return (
    <div id="intro" className="bg">
      <span className="ml-3 name"> 
        Charana Nandasena
      </span>
    </div>
  )
}

function MainPage() {
    return (
      <React.Fragment>
      <NavBar/>
      <div id="main">
        <div data-spy="scroll" data-target="#scroll-spyed-list" data-offset="0">
          <span id="intro1"> </span>
          <Intro/>
          <span id="intro2"> </span>
          <Intro/>
        </div>
      </div>    
      </React.Fragment>
    )
}

ReactDOM.render(<MainPage/>, document.getElementById("root"));

