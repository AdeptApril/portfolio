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
                <p>This site is still a work in progress, but it's an example of how April can learn whatever technology is needed for the task at hand.</p>
            </div>
        )
    }
}