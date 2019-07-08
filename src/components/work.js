import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import MediaQuery from "react-responsive";
import AppScreensPanel from "./AppScreensPanel/AppScreens";
import AppFeaturesPanel from "./AppFeaturesPanel/AppFeatures";
import ProjectListMobile from "./ProjectListMobile";
import Context from "../Context";

const Work = () => {
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

    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [deselected, setDeselected] = useState(false);
    const [context, setContext] = useState({
        imageNodes: [],
        updateContext,
    });

    const projects = data.site.siteMetadata.projectData.projects;

    function changeActiveProject(projectIndex) {
        setDeselected(true);
        setActiveProjectIndex(projectIndex);
        setDeselected(false);
    }

    function updateContext(newContext) {
        try {
            setContext({ ...newContext });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Context.Provider value={context}>
            <MediaQuery query="(min-width: 601px)">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <AppScreensPanel
                        projectList={projects}
                        activeProjectIndex={activeProjectIndex}
                        selectProject={changeActiveProject}
                        deselected={deselected}
                    />
                    <AppFeaturesPanel
                        activeProjectIndex={activeProjectIndex}
                        deselected={deselected}
                    />
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 600px)">
                <ProjectListMobile projects={projects} />
            </MediaQuery>
        </Context.Provider>
    );
};

export default Work;
