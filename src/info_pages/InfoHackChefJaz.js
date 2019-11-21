import React from 'react';

/*Provides data and structure for when further info is wanted on
* the End Hey Guys hackathon project*/
export default class InfoHackChefJaz extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Intro</p>
                <p>April went to Violet Hacks, and helped make a chef aid that made the finals.</p>
                <p className="paragraph-header">Further Project Details</p>
                <p>The preview image shows the home page for the project. For the demo, we focused on the process that a chef would go through as part of setting up a new recipe for a dish they wanted to teach their employees.</p>
                <p>The <a href="https://devpost.com/software/chef-jaz">devpost page</a> gets into more detail, but the short version of why we chose our idea was that we know how difficult life can be as a chef, and we wanted to help reduce their stress as much as we could through technology.</p>
                <p>What we showed off during our presentations was the way that a chef would create recipe instructions for their cooks to use.</p>
                <p>This would both make it easier to teach the cooks without the chef having to watch the entire process, and give the cooks a way to doublecheck steps along the way.</p>
                <p>Future versions of the app would include other aids, like scheduling solutions or versions for the wait staff to be able to share what's in a dish and how it's prepared.</p>
                <p className="paragraph-header">April's contribution</p>
                <p>April worked on some early Android prototypes, but it quickly became clear that an interactive mockup would be a much better use of time, so she helped with the design of that, as well as a variety of other "it needs to be done" roles, including making the <a href="https://devpost.com/software/chef-jaz">devpost page</a> and doing the product demo portion of the presentation.</p>
            </div>
        )
    }
}