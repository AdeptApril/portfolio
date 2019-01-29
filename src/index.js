/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const pics = {
    loveStory: require('./images/LoveStoryScreenshot.png'),
    diploma: require('./images/AprilMastersDiploma.jpeg')
}

var total = 0;

function SetPicture(props) {

    // if(props.picture === 'diploma') {
    //
    // }
    if (props.picture === 'loveStory') {
        return pics.loveStory
        // return <img alt={"Love Story"} src={pics.loveStory} />;
    }
    console.log("Code was here");
    return (
        /!*<img alt={"Diploma"} src={pics.diploma} />*!/
        pics.diploma
    )
}

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.state = {picture: 'default'};
    }

    handlePictureChange(e) {
        if(this.state.toString() !== e.toString() )
        {
            console.log("Picture Entered");
            if(total < 5) {
                this.setState({picture: e.toString()});
                //this.forceUpdate();
                total++;
            }
            //done = true;
        } else {
            console.log("Picture Not entered");
        }
    }

    render() {
        console.log("Code was rendering");
        // function makeLoveStory(e) {
        //     // currImage = pics.loveStory;
        //     // currImageAlt = "Love Story";
        //     e.target.setAttribute('src', pics.loveStory);
        //     e.target.setAttribute('alt', "loveStory");
        //     // previewImage = (<img alt ={currImageAlt} src={currImage}/>);
        //     // ReactDOM.render(page, document.getElementById('root'));
        // }

        //let currImage = pics.diploma;
        //let currImageAlt = "Diploma";

        let previewImage = (
            //{SetPicture}
            <img alt="" src={SetPicture(this.props)}/>
            // {/!*<img alt = "Love Story Demo preview" src={require('./images/LoveStoryScreenshot.png')}/>*!/}
            // {/!*require('./images/LoveStoryScreenshot.png')*!/}
            // {/!*<img src={require('./images/LoveStoryScreenshot.png')} alt="Love Story demo"/>*!/}
        )

        //let page = (
        return (
            <div>
                {/!*<div onMouseEnter={makeLoveStory}>*!/}
                <div>
                    {/!*<img alt={"Diploma"} src={pics.diploma} />*!/}
                    {previewImage}
                </div>
                <div onMouseEnter={this.handlePictureChange("loveStory")}>
                    <a href="Somewhere">
                        Love Story
                    </a><br/>
                </div>
                <div>
                    <a href="Somewhere">Diploma</a><br/>
                </div>
            </div>
        );
        //return page;
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/


import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

const pics = {
    loveStory: require('./images/LoveStoryScreenshot.png'),
    diploma: require('./images/AprilMastersDiploma.jpeg'),
    plantProject: require('./images/PlantProjectVideoThumbnail.png'),
    deutschTelekom: require('./images/XGM.png')
};

class AppTry extends Component {
    constructor(props) {
        super(props);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.state = {
            name: 'React',
            picture: "",
            pic: pics.diploma
        };
    }

    handlePictureChange(pictureName) {
        this.setState({picture: pictureName});
        if(pictureName === "loveStory" ){
            this.setState({pic: pics.loveStory});
        }
        if(pictureName === "diploma" ){
            this.setState({pic: pics.diploma});
        }
        if(pictureName === "plantProject" ) {
            this.setState({pic:pics.plantProject});
        }
        if(pictureName === "deutschTelekom" ) {
            this.setState({pic:pics.deutschTelekom});
        }
        // if(this.state.picture !== pictureName )
        // {
        //     console.log("Picture Entered");
        //     //this.forceUpdate();
        // } else {
        //     console.log("Picture Not entered");
        // }
        console.log(this.state.picture + " " + pictureName);
    }

    render() {
        return (
            //<div onMouseEnter={() => this.handlePictureChange("loveStory")} onMouseLeave={() => this.handlePictureChange("diploma")}>
            <div className="row">
                <div className="projects">
                    <p onMouseEnter={() => this.handlePictureChange("plantProject")}>
                        Plant Project
                    </p>
                    <p onMouseEnter={() => this.handlePictureChange("deutschTelekom")}>
                        Deutsch Telekom Demonstration Project
                    </p>
                </div>
                <div className="image-div">
                    <span><img className="center-img" alt="" src={this.state.pic}/></span>
                </div>
                <div className="projects">
                    <p onMouseEnter={() => this.handlePictureChange("loveStory")}>
                        Love Story demo
                    </p>
                    <p onMouseEnter={() => this.handlePictureChange("diploma")}>
                        Computer Science Masters
                    </p>
                </div>
            </div>
        );
    }
}

render(<AppTry />, document.getElementById('root'));