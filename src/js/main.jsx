// React
import React from 'react'
import ReactDOM from 'react-dom'
// Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
// import 'bootstrap'
// import 'jquery'
// import 'popper.js'
// Custom Components and Styles
import NavBar from "./navbar.jsx"
import '../css/main.css'

function Intro() {
  return (
    <div id="intro" className="bg">
    <div className="row h-100">
      <div className="col my-auto px-auto">
        <h1 className="text-left pl-3"> Charana Nandasena  </h1>
        <h4 className="text-left pl-3"> Computer science graduate </h4>
        <h5 className="text-left pl-3"> Interested in scalable cloud and distributed architectures </h5>
      </div>
      <div className="col">
        Hello World
      </div>
    </div>
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

