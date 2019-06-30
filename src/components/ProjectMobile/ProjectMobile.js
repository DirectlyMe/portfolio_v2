import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import Slider from "../Slider/Slider";
import Tag from "../Tag";
import DownArrow from "../../images/DownArrow.svg";
import { projectTypes } from "../../ProjectsData";
import "./styles.scss";

class ProjectMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
            screenShots: [],
        };

        this.SliderRef = React.createRef();
    }

    componentDidMount() {
        if (
            this.props.project.type === projectTypes.web &&
            this.props.project.screenShots.length === 4
        ) {
            this.props.project.screenShots.shift();

            this.setState({ screenShots: this.props.project.screenShots });
            console.log(`ScreenShots ${this.state.screenShots.length}`);
        } else {
            this.setState({ screenShots: this.props.project.screenShots });
        }
    }

    scrollToSlider = () => {
        setTimeout(() => {
            window.scrollTo({
                top: this.SliderRef.current.offsetTop - 100,
                behavior: "smooth",
            });
        }, 500);
    };

    render() {
        const { name, features, technologies, github } = this.props.project;
        let { screenShots } = this.state;

        const appFeatures = features.map(feature => (
            <li key={feature} style={{ padding: ".7em" }}>
                {feature}
            </li>
        ));
        const techList = technologies.map(technology => (
            <Tag
                key={technology.name}
                text={technology.name}
                color={technology.color}
            />
        ));

        if (!this.state.showMore) {
            return (
                <div
                    className="app-showcase"
                    style={{
                        backgroundColor: `#${this.props.backgroundColor}`,
                    }}
                >
                    <div
                        style={{
                            fontSize: "26px",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: "2%",
                        }}
                    >
                        {name}
                    </div>
                    <ul className="app-features">{appFeatures}</ul>
                    <a
                        style={{
                            marginLeft: "44%",
                            color: "black",
                        }}
                        href={github}
                    >
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <ul className="tech-list">{techList}</ul>
                    <div
                        className="show-more-button"
                        onClick={() => {
                            this.setState(prevState => ({
                                showMore: !prevState.showMore,
                            }));
                        }}
                    >
                        <div>Images</div>
                        <DownArrow />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div
                        className="app-showcase"
                        style={{
                            backgroundColor: `#${this.props.backgroundColor}`,
                        }}
                    >
                        <div
                            style={{
                                fontSize: "26px",
                                fontWeight: "bold",
                                textAlign: "center",
                                marginTop: "2%",
                            }}
                        >
                            {name}
                        </div>
                        <ul className="app-features">{appFeatures}</ul>
                        <a
                            style={{
                                marginLeft: "44%",
                                color: "black",
                            }}
                            href={github}
                        >
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                        <ul className="tech-list">{techList}</ul>
                        <div
                            className="show-more-button"
                            onClick={() => {
                                this.setState(prevState => ({
                                    showMore: !prevState.showMore,
                                }));
                            }}
                        >
                            <div>Images</div>
                            <DownArrow />
                        </div>
                    </div>
                    <div
                        className="app-images"
                        ref={this.SliderRef}
                        onLoad={this.scrollToSlider()}
                    >
                        <Slider
                            images={screenShots}
                            showMore={this.state.showMore}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default ProjectMobile;
