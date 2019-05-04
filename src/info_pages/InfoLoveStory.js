import React from 'react';

/*Provides data and structure for when further info is wanted on
* LoveStory, the demoscene project*/
export default class InfoLoveStory extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Intro</p>
                <p>"Love Story" is a demo that debuted at Evoke 2017, and was the primary reason that Monoceros (as a demo group) won the newcomer award at that demo party</p>
                <p className="paragraph-header">Background of the demo</p>
                <p>When people see the project for the first time, they often think that it's an animation. But demos, in this demoscene sense, are different -- they're real time</p>
                <p>In this case, it's a Java program that uses Processing to create graphics and move constructed models around the screen. And, while you're most likely to see the Youtube version that will be the same every time, there is randomness in the demo -- e.g., when you see rainbow poo on the screen, the placement is determined at run time.</p>
                <p className="paragraph-header">Background of April</p>
                <p>As a child living in the US, April enjoyed watching demos, listening to demoscene music, and enjoying all the other aspects of the demoscene that you can without heading to a demo party. She even tried her hand in a couple of demoscene music competitions.</p>
                <p>But when she wound up in Germany as part of getting her Computer Science masters, she knew she had to take advantage of being within a few hours ground travel of demo parties -- rather than never being closer than half a continent away while in the US.</p>
                <p>After attending one demo party as a consumer, she knew she had to use her increasing programming skills and develop something for Evoke.</p>
                <p className="paragraph-header">Making the demo</p>
                <p>Oftentimes demos are created as weekend projects, or are strings of graphics effects set to music.</p>
                <p>While those are oftentimes wonderful, she wanted to tell a story, and with the help of Dusty (the other founding member of Monoceros), she mapped out what the demo would be.</p>
                <p>After that, it was a matter of making (and revising) until the release at the party.</p>
                <p>She was the primary coder, and did all of the sound effects and music (including timing said effects and music to the visuals).</p>
                <p>She also worked with Dusty in determining what 3D models would be needed to best tell the story, and directed Dusty on how to code sub-projects.</p>
                <p className="paragraph-header">See the demo</p>
                <p><a href="https://www.youtube.com/watch?v=LpUMWNv9BRo">Watch it on Youtube!</a></p>
                <p>Do "like" the video, too.</p>
            </div>
        )
    }
}