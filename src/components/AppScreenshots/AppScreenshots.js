import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import projectTypes from "../../ProjectTypes";
import ExpandedScreen from "../ExpandedImage/ExpandedImage";
import Context from "../../Context";
import "./styles.scss";

const AppScreenshots = ({ activeProject, height, translateValue }) => {
    const [expandedSelected, setExpandSelected] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const context = useContext(Context);

    useEffect(() => {
        setExpandSelected(0);

        const nodes = getsvgs(
            activeProject
        );

        context.imageNodes = nodes;
        context.updateContext(context);
    }, [activeProject]);


    function toggleExpandedScreen(svgsrc) {
        console.log(svgsrc);
        setSelectedImage(svgsrc);
        setExpandSelected(!expandedSelected);
    }

    function getsvgs(activeProject) {
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
                        justifyContent: "center",
                        marginTop: "8vh",
                        zIndex: 7,
                    }}
                    className="screenshot-node"
                    >
                        <img
                            style={{ marginRight: "5%"}}
                            className="app-screenshots--large-image"
                            src={activeProject.screenShots[i]}
                            onClick={e => toggleExpandedScreen(e.target.src)}
                            alt="App screen"
                            />
                        <img
                            style={{ marginLeft: "5%"}}
                            className="app-screenshots--large-image"
                            src={activeProject.screenShots[i + 1]}
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
                        marginTop: "10vh",
                        zIndex: 7,
                    }}
                    className="screenshot-node"
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
                    svgsrc={selectedImage}
                    toggleSelectedFunc={toggleExpandedScreen}
                />
            ) : null}
        </>
    );
};

export default AppScreenshots;
