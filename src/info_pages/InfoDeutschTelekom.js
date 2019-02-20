import React from 'react';

/*Provides data and structure for when further info is wanted on
* The Deutsch Telekom Smart Glasses Demonstration Project*/
export default class InfoDeutschTelekom extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Intro</p>
                <p>Deutsch Telekom worked with Hochschule Darmstadt in a partner program, and for April's team of three they requested a smart-glasses demonstration program</p>
                <p>They provided a fake-data gateway that they wanted the team to send a picture to, and get appropriate data from.</p>
                <p>April's portion was to develop an Android app for the MadGaze Smart glasses, and then for a Zeiss prototype.</p>
                <p className="paragraph-header">Project Structure</p>
                <p>April and her group participated in frequent scrums (some in person, some remote, with up to a half dozen Deutsch Telekom and Hochschule Darmstadt people) to discuss project goals and progress toward them.</p>
                <p>Her team used Trello as a collaboration tool, as suggested, and her team was noted for how well they used the tool to keep everyone updated on their progress and challenges.</p>
                <p className="paragraph-header">Project Success</p>
                <p>April's team was tasked with having the app send a picture, get a machine ID from the fake-data gateway, produce fake data to be sent and send that data, and then display appropriate data in the app.</p>
                <p>Her team managed to complete the requested project within half the allotted time, and impressed the people from Deutsch Telekom with having completed the requested project so quickly.</p>
                <p>After that, additional refinements were requested, and the Zeiss prototype arrived.</p>
                <p>April's team also finished those additional refinements as well as some additional niceties like the logo seen in the preview.</p>
                <p className="paragraph-header">Academic Results</p>
                <p>After project completion and peer reviews, all three of the team members received the best-possible grades (1.0 on the German scale).</p>
            </div>
        )
    }
}