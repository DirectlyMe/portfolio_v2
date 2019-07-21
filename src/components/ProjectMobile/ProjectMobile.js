import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faAws } from "@fortawesome/fontawesome-free-brands";
import Tag from "../Tag";
import Types from "../../ProjectTypes";
import "./styles.scss";
import ExpandedImageMobile from "../ExpandedImageMobile/ExpandedImageMobile";

const ProjectMobile = ({
    images,
    name,
    technologies,
    features,
    type,
    siteLink,
    github,
}) => {
    const [expandedSelected, setExpandSelected] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const appFeatures = features.map(feature => (
        <li key={feature} style={{ padding: "10px" }}>
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

    function toggleExpandedScreen(imageSrc) {
        console.log(imageSrc);
        setSelectedImage(imageSrc);
        setExpandSelected(!expandedSelected);
    }

    return (
        <>
            <div className="project">
                <div className="project-image--container">
                    {type === Types.web ? (
                        <img
                            src={images[0]}
                            className="project-image"
                            onClick={() => setExpandSelected(!expandedSelected)}
                        />
                    ) : (
                        <img
                            src={images[0]}
                            className="project-image--app"
                            onClick={() => setExpandSelected(!expandedSelected)}
                        />
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
            {expandedSelected ? (
                <ExpandedImageMobile
                    images={images}
                    toggleSelectedFunc={toggleExpandedScreen}
                />
            ) : null}
        </>
    );
};

export default ProjectMobile;
