import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import InfoLoveStory from './InfoLoveStory.js';

const pics = {
    loveStory: require('./images/LoveStoryScreenshot_Square.png'),
    diploma: require('./images/AprilMastersDiploma_Square.jpeg'),
    plantProject: require('./images/PlantProjectVideoThumbnail_Square.png'),
    deutschTelekom: require('./images/XGM_Square.png'),
    bioPic: require('./images/AprilWithSkeleton_Square.jpg'),
    reactPortfolio: require('./images/PortfolioV2_Square.png'),
    endHeyGuys: require('./images/end_hey_guys_Square.png'),
    checkoutThemes: require('./images/StorybookScanItem_Square.jpg'),
    juggling: require('./images/juggling_Square.jpg')
};

const subject = {
    loveStory: <InfoLoveStory />
};

class AppTry extends Component {
    constructor(props) {
        super(props);
        this.showInfoOn = this.showInfoOn.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);

        this.state = {
            name: 'React',
            picture: "",
            pic: pics.bioPic,
            currentSubject: "",
            currSubDiv: null
        };
    }

    handlePictureChange(pictureName) {
        this.setState({picture: pictureName});
        switch(pictureName) {
            case "loveStory":
                this.setState({pic: pics.loveStory});
                break;
            case "diploma":
                this.setState({pic: pics.diploma});
                break;
            case "plantProject":
                this.setState({pic:pics.plantProject});
                break;
            case "deutschTelekom":
                this.setState({pic:pics.deutschTelekom});
                break;
            case "bioPic":
                this.setState( {pic:pics.bioPic});
                break;
            case "reactPortfolio":
                this.setState( {pic:pics.reactPortfolio});
                break;
            case "endHeyGuys":
                this.setState( {pic:pics.endHeyGuys});
                break;
            case "checkoutThemes":
                this.setState( {pic:pics.checkoutThemes});
                break;
            case "juggling":
                this.setState( {pic:pics.juggling});
                break;
            default:
                this.setState( {pic:pics.bioPic});
        }
        //For Debugging:
        //console.log(this.state.picture + " " + pictureName);
    }

    showInfoOn(newSubject) {
        this.setState({currentSubject: newSubject});
        switch(newSubject) {
            case "loveStory":
                this.setState({currSubDiv: subject.loveStory});
                break;
            case "diploma":
                this.setState({pic: pics.diploma});
                break;
            case "plantProject":
                this.setState({pic:pics.plantProject});
                break;
            case "deutschTelekom":
                this.setState({pic:pics.deutschTelekom});
                break;
            case "bioPic":
                this.setState( {pic:pics.bioPic});
                break;
            case "reactPortfolio":
                this.setState( {pic:pics.reactPortfolio});
                break;
            case "endHeyGuys":
                this.setState( {pic:pics.endHeyGuys});
                break;
            case "checkoutThemes":
                this.setState( {pic:pics.checkoutThemes});
                break;
            case "juggling":
                this.setState( {pic:pics.juggling});
                break;
            default:
                this.setState( {currSubDiv: ""});
        }
        //For debugging
        //console.log(this.state.currentSubject + " " + newSubject);
    }

    hideSubject() {
        this.setState({currentSubject: ""});
        this.setState( {currSubDiv: ""});
    }

    render() {
        return (
            <div>
                {/*TODO: remake all the items as functions (e.g., showTitleItem(), showLeftSideItems())*/}
                {/*TODO: remake items as a list of items, rather than this more prescriptive way*/}
                <div className="row">
                    <div>
                        <p className="bio-title"
                            onMouseEnter={() => this.handlePictureChange("bioPic")}>
                            April Monoceros Bio
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <p className="projects-left"
                            onMouseEnter={() => this.handlePictureChange("plantProject")}>
                            Remote Plant Watering
                        </p>
                        <p className="projects-left"
                            onMouseEnter={() => this.handlePictureChange("deutschTelekom")}>
                            Smart Glasses Machine Monitor
                        </p>
                        <p className="projects-left"
                            onMouseEnter={() => this.handlePictureChange("endHeyGuys")}>
                            Hackathon Project: End Hey Guys
                        </p>
                        <p className="projects-left"
                            onMouseEnter={() => this.handlePictureChange("checkoutThemes")}>
                            Checkout Themes
                        </p>
                    </div>
                    <div className="image-div">
                        <span><img className="center-img" alt="" src={this.state.pic}/></span>
                    </div>
                    <div>
                        <p className="projects-right"
                            onMouseEnter={() => this.handlePictureChange("loveStory")}
                           onClick={() => this.showInfoOn("loveStory")}>
                            Love Story Real-Time Demo
                        </p>
                        <p className="projects-right"
                            onMouseEnter={() => this.handlePictureChange("diploma")}>
                            Computer Science Masters
                        </p>
                        <p className="projects-right"
                            onMouseEnter={() => this.handlePictureChange("reactPortfolio")}>
                            React Portfolio Site
                        </p>
                        <p className="projects-right"
                            onMouseEnter={() => this.handlePictureChange("juggling")}>
                            Juggling
                        </p>
                    </div>
                </div>
                <div className="row">
                    {/*Further info placed here*/}
                    <div className="furtherInfo">
                        <div>
                            {this.state.currSubDiv}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<AppTry />, document.getElementById('root'));