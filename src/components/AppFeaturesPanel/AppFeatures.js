import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { animated, useSpring } from "react-spring";
import classnames from "classnames";
import Tag from "../Tag";
import BlueCircle from "../../svgs/BlueCircle.svg";
import WhiteCircle from "../../svgs/WhiteCircle.svg";
import "./styles.scss";
import { useStaticQuery, graphql } from "gatsby";
import ProjectTypes from "../../ProjectTypes";

const AppFeatures = ({ activeProjectIndex, deselected }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    projectData {
                        projects {
                            name
                            type
                            features
                            screenShots
                            technologies {
                                name
                                color
                            }
                            github
                            siteLink
                        }
                    }
                }
            }
        }
    `);

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, []);

    function updateWindowDimensions() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    const project =
        data.site.siteMetadata.projectData.projects[activeProjectIndex];
    const { name, features, technologies, github, siteLink } = project;
    const featureList = features.map(feature => (
        <li style={{ width: "100%", marginRight: "40px" }} key={feature}>
            {feature}
        </li>
    ));

    const techList = technologies.map((technology, index) => (
        <Tag key={index} text={technology.name} color={technology.color} />
    ));

    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <>
            <div
                className="app-features-panel"
                style={{
                    height: height,
                    display: "flex",
                }}
            >
                <div
                    key={name}
                    className={classnames({
                        // ["app-details-incoming"]: !deselected, // eslint-disable-line
                        // ["app-details-outgoing"]: deselected, // eslint-disable-line
                    })}
                >
                    <div
                        style={{
                            marginTop: "16vh",
                            textAlign: "center",
                            fontSize: "36px",
                            marginBottom: "60px",
                            fontWeight: "400",
                        }}
                    >
                        <animated.div style={props}>{name}</animated.div>
                    </div>
                    <div className="feature-list--wrapper">
                        <ul
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                textAlign: "center",
                                marginBottom: "20px",
                                fontSize: "22px",
                                fontWeight: "300",
                            }}
                        >
                            {featureList}
                        </ul>
                    </div>
                    <ul
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            textAlign: "center",
                            marginTop: "5%",
                            fontSize: "18px",
                            fontWeight: "300",
                        }}
                    >
                        <a
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                marginRight: "10px",
                            }}
                            href={github}
                        >
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                        {project.type === ProjectTypes.web ? (
                            <a
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "black",
                                    marginLeft: "10px",
                                }}
                                href={siteLink}
                            >
                                <FontAwesomeIcon icon={faGlobe} size="3x" />
                            </a>
                        ) : null}
                    </ul>
                    <ul className="app-details--tech-list">{techList}</ul>
                </div>
                <WhiteCircle
                    style={{
                        position: "absolute",
                        left: "-225px",
                        bottom: "8%",
                        zIndex: "4",
                    }}
                />
                <BlueCircle
                    style={{
                        position: "absolute",
                        right: "-130px",
                        bottom: "-130px",
                        zIndex: "4",
                    }}
                />
            </div>
        </>
    );
};

export default AppFeatures;
