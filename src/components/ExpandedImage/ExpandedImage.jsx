import React from "react";
import "./styles.scss";

const ExpandedImage = ({ imageSrc, toggleSelectedFunc }) => {
    return (
        <div className="expanded-image" onClick={() => toggleSelectedFunc(imageSrc)}>
            <img
                src={imageSrc}
                className="expanded-image--image"
                alt="Project"
                onClick={() => toggleSelectedFunc(imageSrc)}
            />
        </div>
    );
};

export default ExpandedImage;
