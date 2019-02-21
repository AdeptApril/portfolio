import React from 'react';

/*Provides data and structure for when further info is wanted on
* April's bio*/
export default class InfoBio extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Summary</p>
                <p>April has a masters in Computer Science, has a history of exceptional work at libraries and retail, and is currently looking for a tech position in San Francisco.</p>
                <p>See her <a href="http://aprilmonoceros.com/April%20Resume%20Color.pdf">resume</a>, and e-mail her at <a href='mailt&#111;&#58;&#97;%&#55;0&#114;il%40%&#54;Do%6Eo%63ero%&#55;3&#46;&#114;ocks'>&#97;pr&#105;&#108;&#64;&#109;on&#111;c&#101;ro&#115;&#46;&#114;ocks</a> if you're interested in having her work for your company.</p>
            </div>
        )
    }
}