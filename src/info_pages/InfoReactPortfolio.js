import React from 'react';

/*Provides data and structure for when further info is wanted on
* */
export default class InfoReactPortfolio extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">This website</p>
                <p>April enjoys learning new technologies, and for many of the projects detailed on this site, she picked up the needed technology in order to get the project done.</p>
                <p>In the case for this website, she explored React -- sometimes by reading a book about React, sometimes by searching for a solution to a problem, and sometimes by using other educational material.</p>
                <p>She also has been learning about three.js as a way to show some of the models from the Love Story demo.</p>
                <p>This site is still a work in progress, but it's an example of how April can learn whatever technology is needed for the task at hand.</p>
                <p className="paragraph-header">Development</p>
                <p>The preview image shows snapshots back to earlier versions. The earlier versions show topics being added, having a circular preview image, having a background video, and more.</p>
                <p>You can take a look at the <a href="https://github.com/AdeptApril/portfolio">code at github</a>.</p>
                <p className="paragraph-header">Features</p>
                <p>·On hover, each of the links (including the bio on top) are underlined and cause the center image to change.</p>
                <p>·When "Remote Plant Watering" is clicked, a demonstration video plays in place of the center image</p>
                <p>·There's a rotating unicorn from the Love Story Real-Time Demo, that's included using three.js, as well as exporting a GLTF file from Blender.</p>
            </div>
        )
    }
}