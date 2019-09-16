import React from 'react';

/*Info on the Pirate Talk page
* */
export default class InfoPirateTalk extends React.Component{
  render() {
    return (
      <div className="info-div">
        <p className="paragraph-header">Intro</p>
        <p>April has enjoyed celebrating International Talk Like a Pirate Day every September 19th, even if sometimes celebrating it is more about dressing up like a pirate than talking like one.</p>
        <p>So, when ITLAPD approached, she decided that it was a good idea to make a page to answer the question: Is it time to talk like a pirate?</p>
        <p>Please check out the <a href="http://april.tech/piratetalk/">Pirate Talk page</a> to find out the answer.</p>
        <p>The page was made using ReactJS, with a photo from her checkout themes and a modified Creative Commons (cc-by-sa-2.0) <a href="https://www.flickr.com/photos/dougal/424494744/">photo by Dougal Campbell</a> for the favicon, with the <a href="https://www.flickr.com/photos/53361275@N00/48725678246">modified version</a> released under the same license.</p>
      </div>
    )
  }
}