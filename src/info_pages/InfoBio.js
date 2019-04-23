import React from 'react';

/*Provides data and structure for when further info is wanted on
* April's bio*/
export default class InfoBio extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Summary</p>
                <p>April has a masters in Computer Science, has a history of exceptional work at libraries and retail, and is currently looking for a tech position in Los Altos/Mountain View or the general San Francisco Bay Area.</p>
                <p>Check out the rest of the pages for an introduction to some of the projects that April has done, as well as more in-depth info on the Masters degree.</p>
                <p>See her <a href="http://aprilmonoceros.com/April%20Resume%20Color.pdf">resume</a>, and e-mail her at <a href='mailt&#111;&#58;&#97;%&#55;0&#114;il%40%&#54;Do%6Eo%63ero%&#55;3&#46;&#114;ocks'>&#97;pr&#105;&#108;&#64;&#109;on&#111;c&#101;ro&#115;&#46;&#114;ocks</a> if you're interested in having her work for your company.</p>
                <p>She's also willing to consider interesting work for non-profits. Send along an e-mail if you have a need.</p>
            </div>
        )
    }
}