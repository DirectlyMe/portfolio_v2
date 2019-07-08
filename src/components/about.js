import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LrgCircle from "../images/AboutLrgCircle.svg";
import MedCircle from "../images/AboutMedCircle.svg";
import SmlCircle from "../images/AboutSmlCircle.svg";
import SmallestCircle from "../images/AboutSmlestCircle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faSass,
    faJsSquare,
    faCss3Alt,
    faReact,
    faHtml5,
    faPhp,
} from "@fortawesome/fontawesome-free-brands";
import "./about_styles.scss";

class AboutScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
            width: 0,
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    render() {
        return (
            <>
                <MediaQuery query="(min-width: 900px)">
                    <div
                        style={{
                            backgroundColor: "#FFC95F",
                            height: this.state.height,
                        }}
                    >
                        <div className="about-title">
                            <h1>Jack Hansen</h1>
                            <h2>Frontend Developer</h2>
                        </div>
                        <div
                            style={{
                                zIndex: 2,
                                position: "relative",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                marginRight: "6%",
                            }}
                            className="about"
                        >
                            <img
                                alt="Me"
                                src="https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/general/picture_of_me.jpg"
                                width="450px"
                                height="450px"
                                style={{
                                    borderRadius: "50%",
                                    marginTop: "4%",
                                    marginLeft: "4%",
                                    boxShadow: "3px 2px 3px rgba(0,0,0,.5)",
                                    objectFit: "cover"
                                }}
                            />
                            <div style={{ marginTop: "10vh", fontSize: "24px" }}>
                                <p
                                    style={{
                                        fontSize: "32px",
                                        fontWeight: 400,
                                    }}
                                >
                                    Hi there,
                                </p>
                                <p
                                    style={{
                                        marginLeft: "10%",
                                        marginTop: "-1%",
                                        width: "22em",
                                    }}
                                >
                                    Thanks for taking the time to check out my
                                    portfolio.
                                </p>
                                <p
                                    style={{
                                        textAlign: "center",
                                        marginTop: "-2%",
                                    }}
                                >
                                    - About me -
                                </p>
                                <ul
                                    style={{
                                        marginTop: "-5%",
                                        textAlign: "center",
                                    }}
                                >
                                    <li>
                                        I’m primarily a mobile developer, with{" "}
                                        <br /> experience in web, android, and
                                        ios.
                                    </li>
                                    <li style={{ marginTop: "-6%" }}>
                                        I’m currently pursuing a bachelors in{" "}
                                        <br /> computer science with a minor in
                                        design.
                                    </li>
                                </ul>
                                <div
                                    style={{
                                        textAlign: "center",
                                        marginLeft: "1%",
                                    }}
                                >
                                    <a
                                        href="https://github.com/DirectlyMe"
                                        className="about--icon-link"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            size="2x"
                                            style={{ marginRight: "1em" }}
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/jack-hansen-6b8030126/"
                                        className="about--icon-link"
                                    >
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            size="2x"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="about-technologies--wrapper">
                            <div className="about-technologies">
                                <FontAwesomeIcon icon={faSass} size="4x" />
                                <FontAwesomeIcon
                                    icon={faJsSquare}
                                    size="4x"
                                />
                                <FontAwesomeIcon
                                    icon={faCss3Alt}
                                    size="4x"
                                />
                                <FontAwesomeIcon icon={faReact} size="4x" />
                                <FontAwesomeIcon icon={faHtml5} size="4x" />
                                <FontAwesomeIcon icon={faPhp} size="4x" />
                            </div>
                        </div>
                        <div
                            key={this.state.height}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                zIndex: 1,
                            }}
                        >
                            <LrgCircle
                                className="large-bubble"
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: "11%",
                                }}
                            />
                            <MedCircle
                                className="medium-bubble"
                                style={{
                                    position: "absolute",
                                    right: 80,
                                    top: "42%",
                                }}
                            />
                            <SmlCircle
                                className="small-bubble"
                                style={{
                                    position: "absolute",
                                    right: 95,
                                    top: "63%",
                                }}
                            />
                            <SmallestCircle
                                className="smallest-bubble"
                                style={{
                                    position: "absolute",
                                    right: 78,
                                    top: "78%",
                                }}
                            />
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 499px)">
                    <div className="about-wrapper">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                alt="Me"
                                src="https://scontent.fslc1-1.fna.fbcdn.net/v/t1.0-9/17759876_277389296046627_4368098123657957279_n.jpg?_nc_cat=111&_nc_ht=scontent.fslc1-1.fna&oh=d779def61c1ea46461064d7c347ac178&oe=5C8BA316"
                                width="350px"
                                height="350px"
                                style={{
                                    borderRadius: "50%",
                                    marginTop: "5%",
                                    justifyContent: "center",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                fontSize: "21px",
                                fontWeight: "bold",
                                width: "95%",
                                justifyContent: "center",
                            }}
                        >
                            <p style={{ marginLeft: "6%" }}>Hi there,</p>
                            <p style={{ marginTop: "-1%", marginLeft: "6%" }}>
                                Thanks for taking the time to check out my
                                portfolio.
                            </p>
                            <p
                                style={{
                                    textAlign: "center",
                                    marginLeft: "4%",
                                }}
                            >
                                - About me -
                            </p>
                            <ul style={{ marginTop: "-5%" }}>
                                <li>
                                    I’m primarily a mobile developer, with
                                    experience in web, android, and ios.
                                </li>
                                <li style={{ marginTop: "-6%" }}>
                                    I’m currently pursuing a bachelors in
                                    computer science with a minor in design.
                                </li>
                            </ul>
                            <div
                                style={{
                                    textAlign: "center",
                                    marginLeft: "3%",
                                    paddingBottom: "8%",
                                }}
                            >
                                <a
                                    href="https://github.com/DirectlyMe"
                                    className="about--icon-link"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        size="2x"
                                        style={{ marginRight: "1em" }}
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jack-hansen-6b8030126/"
                                    className="about--icon-link"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        size="2x"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </>
        );
    }
}

export default AboutScreen;
