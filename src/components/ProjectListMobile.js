import React from "react";
import Project from "./ProjectMobile/ProjectMobile";

const ProjectList = ({ projects }) => {
  const backgroundColors = ["FCFFB3", "8FD7E1", "AAFFE7", "FFC95F"];
  let index = 0;

  const mobileProjects = projects.map(project => {
    // loop through colors for project backgrounds
    let color = backgroundColors[index];

    // adds a 60px top margin to the first element to compensate for the navbar overlap
    if (index === 0) {
      index++;
      return (
        <div style={{ marginTop: "60px" }} key={project.github}>
          <Project
            style={{ paddingTop: "70px" }}
            project={project}
            backgroundColor={color}
          />
        </div>
      );
    } else {
      index++;
      return (
        <Project
          key={project.github}
          project={project}
          backgroundColor={color}
        />
      );
    }
  });

  return <div>{mobileProjects}</div>;
};

export default ProjectList;
