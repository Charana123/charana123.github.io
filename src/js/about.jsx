import React from 'react'
import '../css/about.css'
import "../css/common.css"

export default function AboutMe() {
    return (
        <div id="about">
            <span className="heading"> About Me </span>
            <div className="jumbotron jumbotron-style">
                A driven software engineer, seeking exciting challenges on work
                and off work. I recently graduated from The University of Bristol, United
                Kingdom with a 75%, UK First Class Honors or US 4.25 GPA score. The technical difficult
                or novelty of a topic interest me, taking me several which ways - from theoretically
                challenging topics - cryptography, quantum information theory, algorithm design, machine learning,
                computer graphics to traditional fullstack engineering.
                My efforts since 2 years ago have moved towards architecting and developing complex software systems, 
                to which there are several facets. Front-End (React, Angular), Backend (Golang, NodeJS, Java, C++),
                Scalability (FAAS, Docker, Microservices, Kubernetes), Security (Identity
                and Access Management), Asynchronous Message Passing (Apache Kafka), Monitoring and Logging (Grafana), 
                Datastore (Redis, NoSQL and SQL Databases). Take a look at Experience and Projects to see how i've worked with
                these technologies, enjoy :).
            </div>
        </div>
    )
}