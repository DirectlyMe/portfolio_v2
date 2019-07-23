import React from "react";
import Project from "./ProjectMobile/ProjectMobile";

const ProjectList = ({ projects }) => {
    const mobileProjects = projects.map((project, index) => (
        <Project
            images={project.screenShots}
            technologies={project.technologies}
            features={project.features}
            name={project.name}
            type={project.type}
            github={project.github}
            siteLink={project.siteLink}
            key={index}
        />
    ));

    return (
        <div>
            <div style={{ marginLeft: "20px", paddingTop: "40px", fontSize: "32px", marginBottom: "40px" }}>My Work</div>
            <div>{mobileProjects}</div>
        </div>
    );
};

export default ProjectList;
