import React, { Component } from "react";
import classNames from "classnames";
import { Swipeable } from "react-swipeable";
import Slide from "./Slide";
import { ReactComponent as RightArrow } from "../../images/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../images/LeftArrow.svg";
import "./styles.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      translateValue: 0,
      images: this.props.images
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return;
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + window.innerWidth
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -window.innerWidth
    }));
  };

  render() {
    const { images } = this.state;

    const imageSlides = images.map((image, i) => (
      <Slide key={i} image={image} />
    ));

    return (
      <Swipeable
        onSwipedRight={this.goToPrevSlide}
        onSwipedLeft={this.goToNextSlide}
      >
        <div
          className={classNames(["slider"], {
            // triggers image slider animation
            ["slider-leaving"]: !this.props.showMore // eslint-disable-line
          })}
        >
          <div
            className="slider-wrapper"
            style={{
              // image transition animation
              transform: `translateX(${this.state.translateValue}px)`,
              transition: "transform ease-out 0.45s"
            }}
          >
            {imageSlides}
          </div>
          <LeftArrow className="left-arrow" onClick={this.goToPrevSlide} />
          <RightArrow className="right-arrow" onClick={this.goToNextSlide} />
        </div>
      </Swipeable>
    );
  }
}

export default Slider;
