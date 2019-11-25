import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import ThreeContainer from './ThreeContainer.js';
import InfoLoveStory from './info_pages/InfoLoveStory.js';
import InfoMasters from './info_pages/InfoMasters.js';
import InfoCheckoutThemes from './info_pages/InfoCheckoutThemes';
import InfoBio from './info_pages/InfoBio.js';
import InfoDeutschTelekom from './info_pages/InfoDeutschTelekom.js';
import InfoEndHeyGuys from './info_pages/InfoEndHeyGuys';
import InfoJuggling from './info_pages/InfoJuggling';
import InfoPlantProject from './info_pages/InfoPlantProject';
import InfoReactPortfolio from './info_pages/InfoReactPortfolio';
import InfoPirateTalk from './info_pages/InfoPirateTalk';
import VideoPlantWatering from "./VideoPlantWatering";
import InfoHackChefJaz from "./info_pages/InfoHackChefJaz";
import InfoHackCoolEye from "./info_pages/InfoHackCoolEye";

const pics = {
    loveStory: require('./images/LoveStoryScreenshot_Square.png'),
    diploma: require('./images/AprilMastersDiploma_Square.jpeg'),
    plantProject: require('./images/PlantProjectVideoThumbnail_Square.png'),
    deutschTelekom: require('./images/XGM_Square.png'),
    bioPic: require('./images/AprilChevronDress_Square.png'),
    reactPortfolio: require('./images/PortfolioV7_Square.png'),
    endHeyGuys: require('./images/end_hey_guys_Square.png'),
    checkoutThemes: require('./images/StorybookScanItem_Square.jpg'),
    juggling: require('./images/juggling_Square.jpg'),
    pirateTalk: require( './images/PirateTalk_Square.jpg'),
    hackChefJaz: require('./images/ChefJazHome_Square.png'),
    hackCoolEye: require('./images/bacteria_eye.png')
};

const subject = {
    loveStory: <InfoLoveStory />,
    diploma: <InfoMasters />,
    checkoutThemes: <InfoCheckoutThemes />,
    bioPic: <InfoBio />,
    deutschTelekom: <InfoDeutschTelekom />,
    endHeyGuys: <InfoEndHeyGuys />,
    juggling: <InfoJuggling />,
    plantProject: <InfoPlantProject />,
    reactPortfolio: <InfoReactPortfolio />,
    pirateTalk: <InfoPirateTalk />,
    hackChefJaz: <InfoHackChefJaz />,
    hackCoolEye: <InfoHackCoolEye/>
};

    const video = {
    plantProject: <VideoPlantWatering/>
    };

class AppTry extends Component {
    constructor(props) {
        super(props);
        this.showInfoOn = this.showInfoOn.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);

        this.state = {
            name: 'Portfolio', //Name of the general portfolio? I don't know where this is used.
            picture: "", //The string for the name of the current picture (May not be needed)
            pic: pics.bioPic, //The links to the various included pictures
            currentSubject: "", //The string for the name of the current Info subject (May not be needed)
            currSubDiv: null, //Which subject to be showing additional info about.
            currVideo: null,
            width: window.innerWidth
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    //This should be called when the center picture should be changed.
    //As of this writing, it's when the pointer hovers over a given link.
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
            case "pirateTalk":
                this.setState({pic:pics.pirateTalk});
                break;
            case "juggling":
                this.setState( {pic:pics.juggling});
                break;
            case "hackChefJaz":
                this.setState( {pic:pics.hackChefJaz});
                break;
            case "hackCoolEye":
                this.setState({pic:pics.hackCoolEye});
                break;
            default:
                this.setState( {pic:pics.bioPic});
        }
        //For Debugging:
        //console.log(this.state.picture + " " + pictureName);
    }

    //These replace the bottom portion of the screen where {this.state.currSubDiv} is called
    //This should be called when one of the links are clicked
    showInfoOn(newSubject) {
        this.setState({currentSubject: newSubject});
        switch(newSubject) {
            case "loveStory":
                this.setState({currSubDiv: subject.loveStory});
                this.setState({currVideo: null});
                break;
            case "diploma":
                this.setState({currSubDiv: subject.diploma});
                this.setState({currVideo: null});
                break;
            case "plantProject":
                this.setState({currSubDiv: subject.plantProject});
                //this.setState({pic:null}); //Setting it to null messes up the spacing in Chrome, though not in Firefox
                this.setState({currVideo: video.plantProject});
                break;
            case "deutschTelekom":
                this.setState({currSubDiv: subject.deutschTelekom});
                this.setState({currVideo: null});
                break;
            case "bioPic":
                this.setState( {currSubDiv: subject.bioPic});
                this.setState({currVideo: null});
                break;
            case "reactPortfolio":
                this.setState( {currSubDiv: subject.reactPortfolio});
                this.setState({currVideo: null});
                break;
            case "endHeyGuys":
                this.setState( {currSubDiv: subject.endHeyGuys});
                this.setState({currVideo: null});
                break;
            case "checkoutThemes":
                this.setState( {currSubDiv: subject.checkoutThemes});
                this.setState({currVideo: null});
                break;
            case "juggling":
                this.setState( {currSubDiv: subject.juggling});
                this.setState({currVideo: null});
                break;
            case "pirateTalk":
                this.setState( {currSubDiv: subject.pirateTalk});
                this.setState({currVideo: null});
                break;
            case "hackChefJaz":
                this.setState( {currSubDiv: subject.hackChefJaz});
                this.setState({currVideo: null});
                break;
            case "hackCoolEye":
                this.setState( {currSubDiv: subject.hackCoolEye});
                this.setState({currVideo: null});
                break;
            default:
                this.setState( {currSubDiv: null});
                this.setState({currVideo: null});
        }
        //For debugging
        //console.log(this.state.currentSubject + " " + newSubject + " " + this.state.currSubDiv );
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;
        return (
            <div className="full_grid">
                {/*this.state.currVideo*/}
                {/*TODO: remake all the items as functions (e.g., showTitleItem(), showLeftSideItems())*/}
                {/*TODO: remake items as a list of items, rather than this more prescriptive way*/}
                {/*Top row is a link for the Bio / a header*/}
                <div className="row_1">
                    <div>
                        <p className="bio-title"
                            onMouseEnter={() => this.handlePictureChange("bioPic")}
                            onClick={() => this.showInfoOn("bioPic")}>
                            April Monoceros Bio
                        </p>
                    </div>
                </div>
                {/*This row has projects-left image-div projects-right. So general idea is list of projects around the center image*/}
                <div className={isMobile ? "row_2_left_append_1" : "row_2"}>
                    <div className="row_2_left">
                        <p className="projects-left"
                            onMouseEnter={() => this.handlePictureChange("plantProject")}
                            onClick={() => this.showInfoOn("plantProject")}>
                            Remote Plant Watering
                        </p>
                        <p className="projects-left"
                            onMouseEnter={() => this.handlePictureChange("deutschTelekom")}
                            onClick={() => this.showInfoOn("deutschTelekom")}>
                            Smart Glasses Machine Monitor
                        </p>
                        <p className="projects-left"
                            onMouseEnter={() => this.handlePictureChange("endHeyGuys")}
                            onClick={() => this.showInfoOn("endHeyGuys")}>
                            Hackathon Project: End Hey Guys
                        </p>
                        <p className="projects-left"
                           onMouseEnter={() => this.handlePictureChange("hackChefJaz")}
                           onClick={() => this.showInfoOn("hackChefJaz")}>
                            Hackathon Project: Chef Jaz
                        </p>

                        <p className="projects-left"
                           onMouseEnter={() => this.handlePictureChange("hackCoolEye")}
                           onClick={() => this.showInfoOn("hackCoolEye")}>
                            Hackathon Project: Cool Eye
                        </p>

                        <p className="projects-left"
                           onMouseEnter={() => this.handlePictureChange("pirateTalk")}
                           onClick={() => this.showInfoOn("pirateTalk")}>
                            Time to Talk Like a Pirate?
                        </p>
                        <p className="projects-left"
                            onMouseEnter={() => this.handlePictureChange("checkoutThemes")}
                            onClick={() => this.showInfoOn("checkoutThemes")}>
                            Checkout Themes
                        </p>
                    </div>
                    <div className="image-div">
                        <div><span><img className="center-img" alt="" src={this.state.pic}/></span></div>
                        <div>{this.state.currVideo}</div>
                    </div>
                    <div className={isMobile ? "row_2_append_2" : "row_2_right"}/*isMobile ? "row_2_left_append" : "row_2_right"*/>
                        <p className="projects-right"
                            onMouseEnter={() => this.handlePictureChange("loveStory")}
                            onClick={() => this.showInfoOn("loveStory")}>
                            <span className="three-object">{<ThreeContainer />}</span>
                            <div className="project-text">
                            Love Story Real-Time Demo
                            </div>
                        </p>
                        <p className="projects-right"
                            onMouseEnter={() => this.handlePictureChange("diploma")}
                            onClick={() => this.showInfoOn("diploma")}>
                            Computer Science Masters
                        </p>
                        <p className="projects-right"
                            onMouseEnter={() => this.handlePictureChange("reactPortfolio")}
                            onClick={() => this.showInfoOn("reactPortfolio")}>
                            React Portfolio Site
                        </p>
                        <p className="projects-right"
                            onMouseEnter={() => this.handlePictureChange("juggling")}
                            onClick={() => this.showInfoOn("juggling")}>
                            Juggling
                        </p>
                    </div>
                </div>
                <div className="further-info">
                    {/*Further info placed here*/}
                    <div className="further-info">
                        <div>
                            {this.state.currSubDiv}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//render(<AppTry />, document.getElementById('root'));
render(<AppTry />, document.getElementById('root'));