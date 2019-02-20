import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import InfoLoveStory from './info_pages/InfoLoveStory.js';
import InfoMasters from './info_pages/InfoMasters.js';
import InfoCheckoutThemes from './info_pages/InfoCheckoutThemes';
import InfoBio from './info_pages/InfoBio.js';
import InfoDeutschTelekom from './info_pages/InfoDeutschTelekom.js';
import InfoEndHeyGuys from './info_pages/InfoEndHeyGuys';
import InfoJuggling from './info_pages/InfoJuggling';
import InfoPlantProject from './info_pages/InfoPlantProject';
import InfoReactPortfolio from './info_pages/InfoReactPortfolio';

const pics = {
    loveStory: require('./images/LoveStoryScreenshot_Square.png'),
    diploma: require('./images/AprilMastersDiploma_Square.jpeg'),
    plantProject: require('./images/PlantProjectVideoThumbnail_Square.png'),
    deutschTelekom: require('./images/XGM_Square.png'),
    bioPic: require('./images/AprilWithSkeleton_Square.jpg'),
    reactPortfolio: require('./images/PortfolioV4_Square.png'),
    endHeyGuys: require('./images/end_hey_guys_Square.png'),
    checkoutThemes: require('./images/StorybookScanItem_Square.jpg'),
    juggling: require('./images/juggling_Square.jpg')
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
    reactPortfolio: <InfoReactPortfolio />
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
                this.setState({currSubDiv: subject.diploma});
                break;
            case "plantProject":
                this.setState({currSubDiv: null});
                break;
            case "deutschTelekom":
                this.setState({currSubDiv: subject.deutschTelekom});
                break;
            case "bioPic":
                this.setState( {currSubDiv: null});
                break;
            case "reactPortfolio":
                this.setState( {currSubDiv: null});
                break;
            case "endHeyGuys":
                this.setState( {currSubDiv: null});
                break;
            case "checkoutThemes":
                this.setState( {currSubDiv: subject.checkoutThemes});
                break;
            case "juggling":
                this.setState( {currSubDiv: null});
                break;
            default:
                this.setState( {currSubDiv: null});
        }
        //For debugging
        //console.log(this.state.currentSubject + " " + newSubject + " " + this.state.currSubDiv );
    }

    render() {
        return (
            <div>
                {/*TODO: remake all the items as functions (e.g., showTitleItem(), showLeftSideItems())*/}
                {/*TODO: remake items as a list of items, rather than this more prescriptive way*/}
                {/*Top row is a link for the Bio / a header*/}
                <div className="row">
                    <div>
                        <p className="bio-title"
                            onMouseEnter={() => this.handlePictureChange("bioPic")}
                            onClick={() => this.showInfoOn("bioPic")}>
                            April Monoceros Bio
                        </p>
                    </div>
                </div>
                {/*This row has projects-left image-div projects-right. So general idea is list of projects around the center image*/}
                <div className="row">
                    <div>
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
                            onMouseEnter={() => this.handlePictureChange("checkoutThemes")}
                            onClick={() => this.showInfoOn("checkoutThemes")}>
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
                <div className="row">
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

render(<AppTry />, document.getElementById('root'));