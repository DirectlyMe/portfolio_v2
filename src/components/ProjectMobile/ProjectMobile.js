import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faAws } from "@fortawesome/fontawesome-free-brands";
import Tag from "../Tag";
import Types from "../../ProjectTypes";
import "./styles.scss";

const ProjectMobile = ({ image, name, technologies, features, type, siteLink, github }) => {
    const appFeatures = features.map(feature => (
        <li key={feature} style={{ padding: ".7em" }}>
            {feature}
        </li>
    ));

    const techList = technologies.map(technology => (
        <Tag
            key={technology.name}
            text={technology.name}
            color={technology.color}
        />
    ));

    return (
        <div className="project">
            <div className="project-image--container">
                {type === Types.web ? (
                    <img src={image} className="project-image" />
                ) : (
                    <img src={image} className="project-image--app" />
                )}
            </div>
            <div
                style={{
                    fontSize: "26px",
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                {name}
            </div>
            <ul className="app-features">{appFeatures}</ul>
            <ul
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            textAlign: "center",
                            marginTop: "20px",
                            fontSize: "18px",
                            fontWeight: "300",
                        }}
                    >
                        <a
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                marginRight: "10px",
                            }}
                            href={github}
                        >
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                        {type === Types.web ? (
                            <a
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "black",
                                    marginLeft: "10px",
                                }}
                                href={siteLink}
                            >
                                <FontAwesomeIcon icon={faAws} size="3x" />
                            </a>
                        ) : null}
                    </ul>
            <ul className="tech-list">{techList}</ul>
        </div>
    );
};

export default ProjectMobile;
