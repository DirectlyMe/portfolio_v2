import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { projectTypes } from "../../ProjectsData";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import ExpandedScreen from "../ExpandedImage/ExpandedImage";
import YellowCircle from "../../images/YellowCircle.svg";
import { useStaticQuery, graphql } from "gatsby";
import "./styles.scss";

const AppScreens = ({ projectList, activeProjectIndex, selectProject, deselected }) => {
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

    const activeProject = data.site.siteMetadata.projectData.projects[activeProjectIndex]

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [expandedSelected, setExpandSelected] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    });

    function updateWindowDimensions() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    function toggleExpandedScreen(imageSrc) {
        console.log(imageSrc);
        setSelectedImage(imageSrc);
        setExpandSelected(!expandedSelected);
    }

    return (
        <>
            <div className="app-screenshots-panel" style={{ height: height }}>
                <YellowCircle
                    style={{
                        left: "-140px",
                        top: "-130px",
                        zIndex: 6,
                        position: "absolute",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 7,
                    }}
                >
                    <ProjectTabs
                        projects={projectList}
                        activeProject={activeProject}
                        selectProjectFunc={selectProject}
                    />
                </div>
                {activeProject.type === projectTypes.app ? (
                    <div
                        key={activeProject.name}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            zIndex: 7,
                        }}
                        className={classNames({
                            ["screen-shots-incoming"]: !deselected, // eslint-disable-line
                            ["screen-shots-departing"]: deselected, // eslint-disable-line
                        })}
                    >
                        <img
                            // height={height - height * 0.3}
                            className="app-screenshots--large-image"
                            src={activeProject.screenShots[0]}
                            onClick={e =>
                                toggleExpandedScreen(e.target.src)
                            }
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
                                src={activeProject.screenShots[1]}
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
                                src={activeProject.screenShots[2]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                        </div>
                        <img
                            height={height - height * 0.3}
                            className="app-screenshots--large-image"
                            src={activeProject.screenShots[3]}
                            onClick={e =>
                                toggleExpandedScreen(e.target.src)
                            }
                            alt="App screen"
                        />
                    </div>
                ) : null}
                {activeProject.type === projectTypes.web ? (
                    <div
                        key={activeProject.name}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            zIndex: 7,
                        }}
                        className={classNames({
                            ["screen-shots-incoming"]: !deselected, // eslint-disable-line
                            ["screen-shots-departing"]: deselected, // eslint-disable-line
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
                                src={activeProject.screenShots[0]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                            <img
                                className="app-screenshots--web-sml-img"
                                src={activeProject.screenShots[1]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                        </div>
                    </div>
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

export default AppScreens;