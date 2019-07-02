import React, { useState } from "react";
import { graphql } from "gatsby";
import MediaQuery from "react-responsive";
import Layout from "../components/layout";
import AppScreensPanel from "../components/AppScreensPanel/AppScreens";
import AppFeaturesPanel from "../components/AppFeaturesPanel/AppFeatures";
import ProjectListMobile from "../components/ProjectListMobile";

const Work = ({ data }) => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [deselected, setDeselected] = useState(false);

    const projects = data.site.siteMetadata.projectData.projects;

    function changeActiveProject(projectIndex) {
        setDeselected(true);
        
        setActiveProjectIndex(projectIndex);
        setDeselected(false);
    }

    return (
        <Layout>
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
        </Layout>
    );
};

export const query = graphql`
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
`;

export default Work;