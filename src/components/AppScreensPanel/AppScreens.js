import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTransition, animated, config } from "react-spring";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
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

    const projects = data.site.siteMetadata.projectData.projects;

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [projectIndex, setProjectIndex] = useState(0);
    const [timesClicked, setTimesClicked] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, []);

    useEffect(() => {
        setProjectIndex(activeProjectIndex);
        setTimesClicked(timesClicked + 1);
    }, [activeProjectIndex])

    let transitions;
    if (activeProjectIndex === 0 && timesClicked === 0) {
        transitions = useTransition(projects[projectIndex], item => item.name, {
            from: { transform: 'translate3d(0,1200px,0)' },
            enter: { transform: 'translate3d(0,0px,0)' },
            leave: { transform: 'translate3d(0,1200px,0)' },
        });
    } else {
        transitions = useTransition(projects[projectIndex], item => item.name, {
            from: { transform: 'translate3d(0,1200px,0)' },
            enter: { transform: 'translate3d(0,1200px,0)' },
            update: { transform: 'translate3d(0,0px,0)' },
            leave: { transform: 'translate3d(0,1200px,0)' },
        });
    }

    function updateWindowDimensions() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
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
            {transitions.map(
                ({ item, props, key }) =>
                    {
                        console.log(item);
                        return (
                            <animated.div key={key} style={props}>
                                <AppScreenshots
                                    activeProject={item}
                                    height={height}
                                    width={width}
                                    deselected={deselected}
                                />
                            </animated.div>
                        )
                    }
            )}
        </div>
    );
};

export default AppScreens;
