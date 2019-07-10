import React, { Component } from "react";
import { Link } from "gatsby";
import MediaQuery from "react-responsive";
import classNames from "classnames";
import "./styles.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutSelected: false,
      workSelected: false
    };
  }

  componentDidMount() {
    this.highlightRoute();
  }

  componentDidUpdate(prevProps) {
    this.highlightRoute();
  } 

  // changes style of navbar based on route pathname
  highlightRoute = () => {
    if (window.location.pathname === "/work" && this.state.aboutSelected) {
      this.setState({ workSelected: true, aboutSelected: false });
    } else if (window.location.pathname === "/" && this.state.workSelected) {
      this.setState({ aboutSelected: true, workSelected: false });
    }
  };

  scrollToPage = (page) => {
    if (page === "Home") {

    }
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <MediaQuery query="(min-width: 500px)">
          <nav className="navbar">
            <div className="navigationButtons">
              <li className="navbar-li">
                <Link
                  to="/work"
                  style={{ textDecoration: "none", color: "black" }}
                  className={classNames(["nav-button"], {
                    ["highlight-route-work"]: window.location.pathname === "/work" // eslint-disable-line
                  })}
                >
                  Work
                </Link>
              </li>
              <li className="navbar-li">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                  className={classNames(["nav-button"], {
                    ["highlight-route-about"]: window.location.pathname === "/" // eslint-disable-line
                  })}
                >
                  About
                </Link>
              </li>
            </div>
          </nav>
        </MediaQuery>
        <MediaQuery query="(max-width: 499px)">
          <nav
            className={classNames(["navbar"], {
              // determines style of the navbar depending on the page
              ["navbar-work"]: window.location.pathname === "/work", // eslint-disable-line
              ["navbar-about"]: window.location.pathname === "/" // eslint-disable-line
            })}
          >
            <div className="profileItems">
              <Link
                className="navbar--name-link"
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    this.highlightRoute();
                  }, 0);
                }}
              >
                {name}
              </Link>
            </div>
            <div className="navigationButtons">
              <li style={{ marginRight: ".3em" }}>
                <Link
                  to="/work"
                  className={classNames(["nav-button"], {
                    ["highlight-route"]: window.location.pathname === "/work" // eslint-disable-line
                  })}
                >
                  Work
                </Link>
              </li>
              <li style={{ marginRight: ".3em " }}>
                <Link
                  to="/"
                  className={classNames(["nav-button"], {
                    ["highlight-route"]: window.location.pathname === "/" // eslint-disable-line
                  })}
                >
                  About
                </Link>
              </li>
            </div>
          </nav>
        </MediaQuery>
      </div>
    );
  }
}

export default NavBar;
