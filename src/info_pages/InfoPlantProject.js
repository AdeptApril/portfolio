import React from 'react';

/*Provides data and structure for when further info is wanted on
* on the Arduino plant project*/
export default class InfoPlantProject extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Intro</p>
                <p>April, as part of a team of three graduate students, created a remote plant watering system that allowed for monitoring and watering a plant from an iPhone app.</p>
                <p className="paragraph-header">Deciding on the project</p>
                <p>The team was given the task of finding an Internet of Things project, and whiteboarded several possible ideas.</p>
                <p>The professor decided that making a remote plant watering system best fit the goals for the class.</p>
                <p className="paragraph-header">Project details</p>
                <p>The project had three major parts: iOS app, server, and an Arduino device. April's primary responsibility was the Arduino device.</p>
                <p>The iOS app displayed details on the plant -- e.g., temperature, humidity, soil moisture, and light -- and give options for watering the plant. The Arduino was connected to all the sensors that give the data, as well as the device to water the plant. The server was in the middle, deployed in a Docker container and with a REST interface we used to communicate between all three parts.</p>
                <p className="paragraph-header">Project challenges and successes</p>
                <p>The Arduino uses a C-style language, and has limited memory. One of the main challenges was to do everything needed -- measuring the variety of inputs, and successfully communicating with the server -- without running out of memory in doing so.</p>
                <p>April pared the program down until the Arduino successfully did all the needed tasks, and also helped with designing and testing the RESTful web service and iOS app.</p>
                <p className="paragraph-header">Class outcome</p>
                <p>April's team, again, fully completed the project ahead of schedule and with all desired features. They used Trello to collaborate, and gave weekly progress reports to detail progress. In the end, everyone on the team received an A.</p>
            </div>
        )
    }
}