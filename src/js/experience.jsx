import React from 'react'
import '../css/experience.css'
import "../css/common.css"
import stackhpcLogo from "../stackhpc-logo.png"
import justEatLogo from "../justeat-logo.png"
import virtusaLogo from "../virtusa-logo.png"

export default class Experience extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        this.refs.stackhpcLogo.setAttribute("src", "public/dist/" + stackhpcLogo)
        this.refs.justEatLogo.setAttribute("src", "public/dist/" + justEatLogo)
        this.refs.virtusaLogo.setAttribute("src", "public/dist/" + virtusaLogo)
    }

    render(){
        return (
            <div id="experience-container">
                <span className="heading"> Experience </span>
                <div className="jumbotron jumbotron-style">
                    <div className="row">
                        <div className="logo-image">
                        <img className="pl-3 virtusa-logo" ref="virtusaLogo"/>
                        </div>
                        <div className="pl-5 col experience-text"> Virtusa </div>
                        <div className="col experience-position"> Full Stack Engineer </div>
                    </div>
                    <div className="pt-2 jumbotron-underline"> </div>
                    <ul className="pt-3">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div className="jumbotron jumbotron-style">
                    <div className="row">
                        <div className="logo-image">
                        <img className="pl-3 stackhpc-logo" ref="stackhpcLogo"/>
                        </div>
                        <div className="pl-5 col experience-text"> StackHPC </div>
                        <div className="col experience-position"> Intern </div>
                    </div>
                    <div className="pt-2 jumbotron-underline"> </div>
                    <ul className="pt-3">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div className="jumbotron jumbotron-style">
                    <div className="row">
                        <div className="logo-image">
                        <img className="pl-3 justeat-logo" ref="justEatLogo"/>
                        </div>
                        <div className="pl-5 col experience-text"> JustEat </div>
                        <div className="col experience-position"> Intern </div>
                    </div>
                    <div className="pt-2 jumbotron-underline"> </div>
                    <ul className="pt-3">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
        )
    }
}