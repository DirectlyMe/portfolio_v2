import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";
import projectTypes from "../../ProjectTypes";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import ExpandedScreen from "../ExpandedImage/ExpandedImage";
import YellowCircle from "../../images/YellowCircle.svg";
import AppScreenshots from "../AppScreenshots/AppScreenshots";
import "./styles.scss";

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

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
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
            <AppScreenshots activeProjectIndex={activeProjectIndex} height={height} width={width} deselected={deselected} />
        </div>
    );
};

export default AppScreens;
