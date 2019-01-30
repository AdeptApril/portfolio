import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

const pics = {
    loveStory: require('./images/LoveStoryScreenshot_Square.png'),
    diploma: require('./images/AprilMastersDiploma_Square.jpeg'),
    plantProject: require('./images/PlantProjectVideoThumbnail_Square.png'),
    deutschTelekom: require('./images/XGM_Square.png'),
    bioPic: require('./images/AprilWithSkeleton_Square.jpg'),
    reactPortfolio: require('./images/PortfolioV1_Square.png')
};

class AppTry extends Component {
    constructor(props) {
        super(props);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.state = {
            name: 'React',
            picture: "",
            pic: pics.bioPic
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
        if(pictureName === "bioPic") {
            this.setState( {pic:pics.bioPic});
        }
        if(pictureName === "reactPortfolio") {
            this.setState( {pic:pics.reactPortfolio});
        }
        //For Debugging:
        //console.log(this.state.picture + " " + pictureName);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="bio-title">
                        <p onMouseEnter={() => this.handlePictureChange("bioPic")}>
                            April Monoceros Bio
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="projects-left">
                        <p onMouseEnter={() => this.handlePictureChange("plantProject")}>
                            Remote Plant Watering
                        </p>
                        <p onMouseEnter={() => this.handlePictureChange("deutschTelekom")}>
                            Smart Glasses Machine Monitor
                        </p>
                    </div>
                    <div className="image-div">
                        <span><img className="center-img" alt="" src={this.state.pic}/></span>
                    </div>
                    <div className="projects-right">
                        <p onMouseEnter={() => this.handlePictureChange("loveStory")}>
                            Love Story Real-Time Demo
                        </p>
                        <p onMouseEnter={() => this.handlePictureChange("diploma")}>
                            Computer Science Masters
                        </p>
                        <p onMouseEnter={() => this.handlePictureChange("reactPortfolio")}>
                            React Portfolio Site
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

render(<AppTry />, document.getElementById('root'));