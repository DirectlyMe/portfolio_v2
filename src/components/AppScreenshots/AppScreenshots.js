import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import projectTypes from "../../ProjectTypes";
import ExpandedScreen from "../ExpandedImage/ExpandedImage";
import Context from "../../Context";
import "./styles.scss";

const AppScreenshots = ({ activeProject, height, width, deselected, currentIndex, translateValue }) => {
    const [expandedSelected, setExpandSelected] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const context = useContext(Context);

    useEffect(() => {
        setExpandSelected(0);

        const nodes = getImages(
            activeProject
        );

        context.imageNodes = nodes;
        context.updateContext(context);
    }, [activeProject]);


    function toggleExpandedScreen(imageSrc) {
        console.log(imageSrc);
        setSelectedImage(imageSrc);
        setExpandSelected(!expandedSelected);
    }

    function getImages(activeProject) {
        let imageNodes = [];

        for (let i = 0; i < activeProject.screenShots.length; i = i + 2) {
            let imageNode;
            if (activeProject.type === projectTypes.app) {
                imageNode = (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            zIndex: 7,
                        }}
                        className={classNames("screenshot-node", {
                            // ["screen-shots-incoming"]: !itemDeselected, // eslint-disable-line
                            // ["screen-shots-departing"]: itemDeselected, // eslint-disable-line
                        })}
                    >
                        <img
                            // height={height - height * 0.3}
                            className="app-screenshots--large-image"
                            src={activeProject.screenShots[i]}
                            onClick={e => toggleExpandedScreen(e.target.src)}
                            alt="App screen"
                        />
                        <div className="app-screenshots--small-images-column">
                            <img
                                height={height - height * 0.63}
                                width="100%"
                                style={{
                                    borderRadius: "10px",
                                    marginBottom: "2%",
                                    maxHeight: "530px",
                                }}
                                src={activeProject.screenShots[i + 1]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                            <img
                                height={height - height * 0.63}
                                width="100%"
                                style={{
                                    borderRadius: "10px",
                                    marginTop: "2%",
                                    maxHeight: "530px",
                                }}
                                src={activeProject.screenShots[i + 2]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                        </div>
                        <img
                            height={height - height * 0.3}
                            className="app-screenshots--large-image"
                            src={activeProject.screenShots[i + 2]}
                            onClick={e => toggleExpandedScreen(e.target.src)}
                            alt="App screen"
                        />
                    </div>
                );
            } else if (activeProject.type === projectTypes.web) {
                imageNode = (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            zIndex: 7,
                        }}
                        className={classNames("screenshot-node", {
                            // ["screen-shots-incoming"]: !itemDeselected, // eslint-disable-line
                            // ["screen-shots-departing"]: itemDeselected, // eslint-disable-line
                        })}
                    >
                        <div
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                // height={height - height * 0.5}
                                // width="68%"
                                className="app-screenshots--web-lrg-img"
                                src={activeProject.screenShots[i]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                            <img
                                className="app-screenshots--web-sml-img"
                                src={activeProject.screenShots[i + 1]}
                                onClick={e =>
                                    toggleExpandedScreen(e.target.src)
                                }
                                alt="App screen"
                            />
                        </div>
                    </div>
                );
            }

            imageNodes.push(imageNode);
        }

        return imageNodes;
    }

    return (
        <>
            <div className="screenshot-nodes">
                <div
                    className="screenshot-nodes--wrapper"
                    style={{
                        transform: `translateY(${translateValue}px)`,
                        transition: "transform ease-out 0.70s",
                    }}
                >
                    {context.imageNodes}
                </div>
            </div>
            {expandedSelected ? (
                <ExpandedScreen
                    imageSrc={selectedImage}
                    toggleSelectedFunc={toggleExpandedScreen}
                />
            ) : null}
        </>
    );
};

export default AppScreenshots;
