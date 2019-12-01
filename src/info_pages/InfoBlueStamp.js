import React from 'react';

/*Provides data and structure for when further info is wanted on
* The Deutsch Telekom Smart Glasses Demonstration Project*/
export default class InfoBlueStamp extends React.Component{
    render() {
        return (
            <div className="info-div">
              <p className="paragraph-header">Intro</p>
              <p>BlueStamp is a summer program in a few locations around the country where high-school children get a chance to build an embedded system</p>
              <p>Projects I loved included a wire bonsai trees with LEDs able to be lit up in a variety of patterns, various robot tanks, and a laser harp</p>
              <p>April's portion was to help as an instructor. She has a history with a variety of embedded systems projects, so while she was a novice with soldering irons, she had experience with Arduino and the general issues faced while working on embedded systems projects.</p>
              <p>She was asked to come back to be a lead instructor the next year, but due to accepting a job offer in Germany, spending the 2020 summer with BlueStamp is unlikely.</p>
              <p>Still, it's an interesting and fun program that has had success in leading kids on to bigger and better things, all with nice web pages to show off when applying to colleges.</p>
              <p>April hopes that one day she can at least make it back and appear at a camp as a guest lecturer.</p>
            </div>
        )
    }
}