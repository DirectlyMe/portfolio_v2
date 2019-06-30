import React, { useState } from "react";
import { graphql } from "gatsby";
import MediaQuery from "react-responsive";

import AppScreensPanel from "../components/AppScreensPanel/AppScreens";
import AppFeaturesPanel from "../components/AppFeaturesPanel/AppFeatures";
import ProjectListMobile from "../components/ProjectListMobile";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
    const [activeProjectIndex, setActiveProject] = useState(0);
    const [deselected, setDeselected] = useState(false);

    const projects = data.site.siteMetadata.projectData.projects;

    function changeActiveProject(project) {
        setDeselected(true);
        setTimeout(() => {
            setActiveProject(project);
            setDeselected(false);
        }, 900);
    }

    return (
        <Layout>
            <SEO title="Home" />
            <MediaQuery query="(min-width: 900px)">
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
                <ProjectListMobile
                    projects={projects}
                />
            </MediaQuery>
        </Layout>
    );
};

export default IndexPage;

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
