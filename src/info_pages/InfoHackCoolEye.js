import React from 'react';

/*Provides data and structure for when further info is wanted on
* the End Hey Guys hackathon project*/
export default class InfoHackCoolEye extends React.Component{
  render() {
    return (
      <div className="info-div">
        <p className="paragraph-header">Intro</p>
        <p>April went to a hackathon with an emphasis on water issues, and worked with a team that created a risk-of-e. coli framework called CoolEye.</p>
        <p className="paragraph-header">Further Project Details</p>
        <p>The preview image is the logo of the project. You can <a href="http://www.aprilmonoceros.com/cooleye/">see what we came up with</a>, which is a map overlay over a field that attempted to give an e. coli risk factor due to a variety of available data.</p>
        <p>The project idea itself depended on a variety of sensors and developed formulas that were just not available from the data at hand, so we did what we could with the concept, by making a nice interactive Javascript page with some basic formulas.</p>
        <p className="paragraph-header">April's contribution</p>
        <p>April wound up filling in wherever was needed. Late on the first day, the primary javascript developer dropped out, so April jumped in to further adjust the code to improve both the functionality and presentation of the available data.</p>
      </div>
    )
  }
}