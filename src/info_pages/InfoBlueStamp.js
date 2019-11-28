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
                <p>April's portion was to help as an instructor. Because of her CS background, primarily with code, but she also got to be pretty good with a soldering iron and wiring as the camp went along.</p>
            </div>
        )
    }
}