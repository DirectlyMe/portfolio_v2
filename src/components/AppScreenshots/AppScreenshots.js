import React, { useState, useEffect } from "react";
import { useTransition, useSpring, animated } from "react-spring";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import projectTypes from "../../ProjectTypes";
import ExpandedScreen from "../ExpandedImage/ExpandedImage";
import "./styles.scss";

const AppScreenshots = ({ activeProjectIndex, height, width, deselected }) => {
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
                        }
                    }
                }
            }
        }
    `);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);
    const [expandedSelected, setExpandSelected] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [imageNodes, setImageNodes] = useState(["Testing", "Testing"]);

    const projects = data.site.siteMetadata.projectData.projects;

    useEffect(() => {
        setCurrentIndex(0);
        setTranslateValue(0);
        setExpandSelected(0);

        const nodes = getImages(data.site.siteMetadata.projectData.projects[activeProjectIndex]);

        setImageNodes(nodes);
    }, [activeProjectIndex]);

    const transitions = useTransition(imageNodes, item => item.key, {
        from: { opacity: 0 },
        enter: { opacity: 0 },
        update: { opacity: 1 },
        leave: { opacity: 0 },
    });

    function goToPrev() {
        if (currentIndex === 0) {
            return;
        }
        setCurrentIndex(currentIndex - 1);

        const nodeHeight = document.querySelector(".screenshot-node")
            .clientHeight;

        setTranslateValue(translateValue + nodeHeight);
    }

    function goToNext() {
        if (currentIndex === imageNodes.length - 1) {
            setCurrentIndex(0);
            setTranslateValue(0);
        }

        setCurrentIndex(currentIndex + 1);

        const nodeHeight = document.querySelector(".screenshot-node")
            .clientHeight;

        setTranslateValue(translateValue - nodeHeight);
    }

    function toggleExpandedScreen(imageSrc) {
        console.log(imageSrc);
        setSelectedImage(imageSrc);
        setExpandSelected(!expandedSelected);
    }

    function getImages(activeProject) {
        let imageNodes = [];

        for (let i = 0; i < activeProject.screenShots.length; i = i + 2) {
            let imageNode;
            if (activeProject.type === projectTypes.app) {
                imageNode = (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            zIndex: 7,
                        }}
                        className={classNames("screenshot-node", {
                            //[styles.itemFade]: !itemDeselected, // eslint-disable-line
                            //["screen-shots-departing"]: itemDeselected, // eslint-disable-line
                        })}
                    >
                        <img
                            // height={height - height * 0.3}
                            className="app-screenshots--large-image"
                            src={activeProject.screenShots[i]}
                            onClick={e => toggleExpandedScreen(e.target.src)}
                            alt="App screen"
                        />
                        <div className="app-screenshots--small-images-column">
                            <img
                                height={height - height * 0.63}
                                width="100%"
                                style={{
                                    borderRadius: "10px",
                                    marginBottom: "2%",
                                    maxHeight: "530px",
                                }}
                                src={activeProject.screenShots[i + 1]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                            <img
                                height={height - height * 0.63}
                                width="100%"
                                style={{
                                    borderRadius: "10px",
                                    marginTop: "2%",
                                    maxHeight: "530px",
                                }}
                                src={activeProject.screenShots[i + 2]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                        </div>
                        <img
                            height={height - height * 0.3}
                            className="app-screenshots--large-image"
                            src={activeProject.screenShots[i + 2]}
                            onClick={e => toggleExpandedScreen(e.target.src)}
                            alt="App screen"
                        />
                    </div>
                );
            } else if (activeProject.type === projectTypes.web) {
                imageNode = (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            zIndex: 7,
                        }}
                        className={classNames("screenshot-node", {
                            // ["screen-shots-incoming"]: !itemDeselected, // eslint-disable-line
                            // ["screen-shots-departing"]: itemDeselected, // eslint-disable-line
                        })}
                    >
                        <div
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                // height={height - height * 0.5}
                                // width="68%"
                                className="app-screenshots--web-lrg-img"
                                src={activeProject.screenShots[i]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                            <img
                                className="app-screenshots--web-sml-img"
                                src={activeProject.screenShots[i + 1]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                        </div>
                    </div>
                );
            }

            imageNodes.push(imageNode);
        }

        return imageNodes;
    }

    return (
        <>
            <div className="screenshot-nodes">
                <div
                    classNames="screenshot-nodes--wrapper"
                    style={{
                        transform: `translateY(${translateValue}px)`,
                        transition: "transform ease-out 0.70s",
                    }}
                >
                    {transitions.map(
                        ({ item, props, key }) =>
                            item && (
                                <animated.div key={key} style={props}>
                                    {item}
                                </animated.div>
                            )
                    )}
                </div>
            </div>
            <div className="more-images--wrapper">
                {currentIndex < imageNodes.length - 1 ? (
                    <span className="more-images--btn">
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            size="5x"
                            onClick={() => goToNext()}
                        />
                    </span>
                ) : null}
                {currentIndex > 0 ? (
                    <span className="more-images--btn">
                        <FontAwesomeIcon
                            icon={faAngleUp}
                            size="5x"
                            onClick={() => goToPrev()}
                        />
                    </span>
                ) : null}
            </div>
            {expandedSelected ? (
                <ExpandedScreen
                    imageSrc={selectedImage}
                    toggleSelectedFunc={toggleExpandedScreen}
                />
            ) : null}
        </>
    );
};

export default AppScreenshots;
