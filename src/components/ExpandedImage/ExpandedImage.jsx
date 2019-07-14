import React from "react";
import "./styles.scss";

const ExpandedImage = ({ svgsrc, toggleSelectedFunc }) => {
    return (
        <div className="expanded-image" onClick={() => toggleSelectedFunc(svgsrc)}>
            <img
                src={svgsrc}
                className="expanded-image--image"
                alt="Project"
                onClick={() => toggleSelectedFunc(svgsrc)}
            />
        </div>
    );
};

export default ExpandedImage;
