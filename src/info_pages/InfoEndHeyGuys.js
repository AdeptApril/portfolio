import React from 'react';

/*Provides data and structure for when further info is wanted on
* the End Hey Guys hackathon project*/
export default class InfoEndHeyGuys extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Intro</p>
                <p>April went to a hackathon, learned enough Javascript to be useful, and helped make a fun project.</p>
                <p className="paragraph-header">Further Project Details</p>
                <p>The preview image shows one of the middle versions of the project, where the program would slowly display text as if it were being typed in or recorded and transcribed, and then displayed possibly problematic phrases and possible alternative ways of saying things.</p>
                <p>This was not meant as a political statement -- just that oftentimes we're not entirely aware of our words and actively _want_ to change how we say things in order to keep everyone involved and valued.</p>
                <p>April's team envisioned future versions of the project where speech recognition could be used, and then a chime played when a variety of phrases were used. We doubted it'd be something to use all the time, but could be useful as a thought-provoking experiment.</p>
                <p className="paragraph-header">April's contribution</p>
                <p>April joined the team, helped flesh out the idea, and given her graduate-school background, offered to code the lookup table portion of the project. She accomplished this goal, and the team wound up with a solid presentation of the product and idea.</p>
            </div>
        )
    }
}