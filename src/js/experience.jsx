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
                        <li> Hello World </li>
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
                        <li> Work involved the development and improvement of serveral components of OpenStack Monasca. A opensource, micro-service based,
                            high-throughput, performant monitoring solution. Take a look at its 
                            <a href="https://wiki.openstack.org/wiki/Monasca#Comparisons_to_alternatives"> architecture </a>.
                        </li>
                        <li>
                            Developed and tested a front-end 
                            <a href="https://github.com/monasca/monasca-grafana"> plugin </a>
                            for Grafana (a data visualisation tool) to present telemetry data from
                            nodes on multiple cluster that are stored in Monasca's Datastore (an Apache Kafka message queue)
                            and notify SysOps of potential server malfunction through Email, PagerDuty etc.
                        </li>
                        <li>
                            Developed an distributed agent
                            <a href="https://github.com/stackhpc/stackhpc-monasca-agent-plugins/tree/charana"> plugin </a>
                            that runs periodically on nodes on cluster and gathers Slurm (a distributed workload manager) metrics
                            , storing them relative to their timestamp in a Kafka message queue for asynchronous processing.
                        </li>
                        <li> 
                            Yet onother Grafana
                            <a href="https://github.com/stackhpc/slurm-visualisation-app"> plugin </a>
                            to present the telemetry data from Slurm as both a time-series graph and an interactive gantt chart
                            that provides SysOps both a birds eye view of the state of a Slurm cluster and the ability to drill
                            down to individual workloads or nodes to troubleshoot malfunctions.
                        </li>
                        <li>
                            Rendered the word cloud on StackHPC's 
                            <a href="http://stackhpc.com/"> landing page </a>
                        </li>
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