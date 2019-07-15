import React, { useState } from "react";
import { Swipeable } from "react-swipeable";
import LeftArrow from "../../svgs/LeftArrow.svg";
import RightArrow from "../../svgs/RightArrow.svg";
import "./styles.scss";

const ExpandedImage = ({ images, toggleSelectedFunc }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const imagesNodes = images.map((image, index) => (
        <div className="expanded-image--wrapper" key={index}>
            <img
                src={image}
                className="expanded-images--image"
                alt="Project"
                onClick={() => toggleSelectedFunc(images[currentIndex])}
            />
        </div>
    ));

    function goToPrev() {
        if (currentIndex === 0) {
            return;
        }
        setCurrentIndex(currentIndex - 1);

        setTranslateValue(translateValue + window.innerWidth);
    }

    function goToNext() {
        if (currentIndex === images.length - 1) {
            // setCurrentIndex(0);
            // setTranslateValue(0);
            return;
        }

        setCurrentIndex(currentIndex + 1);

        setTranslateValue(translateValue - window.innerWidth);
    }

    return (
        <Swipeable onSwipedRight={goToPrev} onSwipedLeft={goToNext}>
            <div
                className="expanded-images"
            >
                <div
                    className="expanded-images--wrapper"
                    style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: "transform ease-out 0.70s",
                    }}
                >
                    {imagesNodes}
                </div>
                <div className="right-arrow" onClick={() => goToNext()}>
                    <RightArrow />
                </div>
                <div className="left-arrow" onClick={() => goToPrev()}>
                    <LeftArrow />
                </div>
            </div>
        </Swipeable>
    );
};

export default ExpandedImage;
