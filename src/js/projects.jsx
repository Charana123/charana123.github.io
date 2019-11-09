import React from 'react'
import '../css/projects.css'
import "../css/common.css"
// import "font-awesome/css/font-awesome.css"

export default function Projects() {
    return (
        <div id="projects-container">
            <span className="heading"> Projects </span>
            <div className="row mx-5" style={{"color": "rgb(200, 191, 191)"}}>
                <div className="col-6 mt-4">
                    <h4> 
                        Portfolio Website
                        <a href="https://github.com/Charana123/charana123.github.io" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> React, Bootstrap 4, Webpack, Babel </p>
                    <ul> 
                        <li> Simple static website </li>
                    </ul>
                </div>
                <div className="col-6 mt-4">
                    <h4> 
                        Monasca Grafana - Notification Plugin
                        <a href="https://github.com/monasca/monasca-grafana" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> Angular, Typescript, Travis CI, Karma, Jasmine, Sinon, Babel, Grunt </p>
                    <ul> 
                        <li> Description under Experience - StackHPC </li>
                    </ul>
                </div>
                <div className="col-6 mt-4">
                    <h4> 
                        Monasca Grafana - Slurm Plugin
                        <a href="https://github.com/stackhpc/slurm-visualisation-app" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> Angular, Typescript, Travis CI, Karma, Jasmine, Sinon, Babel, Grunt </p>
                    <ul> 
                        <li> Description under Experience - StackHPC </li>
                    </ul>
                </div>
                <div className="col-6 mt-4">
                    <h4> 
                        Superscalar CPU Simulator
                        <a href="https://github.com/Charana123/Superscalar-CPU-Simulator" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> Python </p>
                    <ul>
                        <li> Reproduces the architecture of a modern superscalar, out-of-order processors such that design decisions can be prototyped
                            by extending the template architecture and benchmarked against ubiqutous programmatic patterns e.g. conditionals, recursion, loops, vectorized loops and masks. </li>
                        <li> Implements a RISC instruction set and assosiated parser to design and veritify custom benchmark or test kernels </li>
                        <li> Architecture supports pipelining, branch prediction, out-of-order execution, superscalar processing and vectorization  </li>
                    </ul>
                </div>
                <div className="col-6 mt-4">
                    <h4>
                        D2Q9 Fluid Simulator
                        <a href="https://github.com/Charana123/D2Q9-fluid-simulator" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> C </p>
                    <ul>
                        <li> An implementation of the LB Fluid Simulation Methods optimised and fine-tuned for University of Bristol's BlueCrystal 4 Cluster </li>
                        <li> Optimized to vectorize computation withs Intels AVX2 ISEs (Intrustion Set Extensions). </li>
                        <li> MPI (OpenMPI): The processing of the fluid grid was distributed by allocating individual nodes of a cluster with a subgrid, the subgrid
                            is processed exclusively by its node and scynhronized amoung nodes each iteration.
                        </li>
                        <li> CPU Implementation (OpenMP): 
                            The subgrid was further parallelised amoung all CPUs/Thread of the node.
                        </li>
                        <li> GPU Implementation (OpenCL): 
                            The subgrid was divided amoung all GPUs of a node.
                        </li>
                        <li> For a complete list of CPU and GPU optimisation, look 
                            <a href="https://github.com/Charana123/D2Q9-fluid-simulator/blob/master/report.pdf"> here </a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 mt-4">
                    <h4>
                        Javascript Code Dojo
                        <a href="https://github.com/Charana123/Web-Technologies" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> HTML, CSS, Javascript, NodeJS, Docker, SQLite 3, EJS, WebGL, AJAX </p>
                    <ul>
                        <li> A Website with a front-end written purely in HTML, CSS and Javascript and NodeJS backend </li>
                        <li> The website is an educational tool for users to learn javascript by completing code challenges in Javascript.
                            The user once logged will have his progress through challenges tracked, be able to post forum threads, reply to comments.
                        </li>
                        <li> User submissions are run with node as an secure, isolated job in a docker container </li>
                        <li> All post, comment, code, login, signup submissions are captcha verified before authorized </li>
                        <li> Webserver support HTTPS with a self-signed certificate </li>
                        <li> The landing page renders an interactive WebGL graphic </li>
                        <li> The backend datastore is an SQLLite database. Tables have been designed modularly to reduce read/write contention.
                            Each table supports an extensible high level API. All data is encrypted and user passwords are stored as salted hashes.
                        </li>
                        <li> Supports sessions throught browser cookies and a personalised experience with server side 
                            rendered HTML based on session and profile data.    
                        </li>
                    </ul>
                </div>
                {/* <div className="col-6 mt-4">
                    <h4>
                        RTC Chat
                        <a href="https://github.com/Charana123/rtc-chat.git" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> Golang, WebSocket, Serverless, AWS CloudFormation, AWS API Gateway, AWS DynamoDB, AWS SNS, AWS Lambda </p>
                    <ul>
                        <li> A scalable, distributed chat application that communicates in real-time through WebSocket </li>
                    </ul>
                </div>
                <div className="col-6 mt-4">
                    <h4>
                        FTP Server
                        <a href="https://github.com/Charana123/ftp.git" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> Golang </p>
                    <ul>
                        <li> One </li>
                    </ul>
                </div>
                <div className="col-6 mt-4">
                    <h4>
                        Music Genre Classifier
                        <a href="https://github.com/Charana123/Music-Genre-Classifier-DCNN" style={{"color": "white"}}>
                            <li className="pl-2 fa fa-github" > </li>
                        </a>
                    </h4>
                    <p> Python, TensorFlow </p>
                    <ul>
                        <li> One </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}