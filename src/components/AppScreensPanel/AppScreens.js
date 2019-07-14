import "./styles.scss";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext, useEffect, useState } from "react";

import Context from "../../Context";
import YellowCircle from "../../svgs/YellowCircle.svg";
import AppScreenshots from "../AppScreenshots/AppScreenshots";
import ProjectTabs from "../ProjectTabs/ProjectTabs";

const AppScreens = ({
    projectList,
    activeProjectIndex,
    selectProject,
    deselected,
}) => {
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

    const activeProject =
        data.site.siteMetadata.projectData.projects[activeProjectIndex];

    const projects = data.site.siteMetadata.projectData.projects;

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [projectIndex, setProjectIndex] = useState(0);
    const [timesClicked, setTimesClicked] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const context = useContext(Context);

    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, []);

    useEffect(() => {
        setProjectIndex(activeProjectIndex);
        setTimesClicked(timesClicked + 1);
    }, [activeProjectIndex]);

    function updateWindowDimensions() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

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
        if (currentIndex === context.imageNodes.length - 1) {
            setCurrentIndex(0);
            setTranslateValue(0);
        }

        setCurrentIndex(currentIndex + 1);

        const nodeHeight = document.querySelector(".screenshot-node")
            .clientHeight;

        setTranslateValue(translateValue - nodeHeight);
    }

    return (
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
            <AppScreenshots
                activeProject={activeProject}
                height={height}
                width={width}
                deselected={deselected}
                currentIndex={currentIndex}
                translateValue={translateValue}
            />
            <div className="more-images--wrapper">
                {currentIndex < context.imageNodes.length - 1 ? (
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
        </div>
    );
};

export default AppScreens;
