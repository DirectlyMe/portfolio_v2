import "./styles.scss";

import classNames from "classnames";
import React, { useContext } from "react";
import MediaQuery from "react-responsive";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import Tree from "../../svgs/tree.svg";

import Context from "../../Context";

const NavBar = ({ currentPage, location }) => {
    const context = useContext(Context);

    console.log(location.pathname);

    return (
        <div>
            <MediaQuery query="(min-width: 500px)">
                <nav className="navbar">
                    <div className="navigationButtons">
                        <li className="navbar-li">
                            <Link
                                to="/"
                                onClick={() => context.changePage("/")}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                className={classNames(["nav-button"], {
                                    ["highlight-route-about"]:
                                        location.pathname === "/", // eslint-disable-line
                                })}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="navbar-li">
                            <Link
                                to="/work"
                                onClick={() => context.changePage("/work")}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                className={classNames(["nav-button"], {
                                    ["highlight-route-work"]:
                                        location.pathname === "/work/" || location.pathname === "/work", // eslint-disable-line
                                })}
                            >
                                Work
                            </Link>
                        </li>
                    </div>
                </nav>
            </MediaQuery>
            <MediaQuery query="(max-width: 499px)">
                <nav className="navbar">
                    <div style={{ height: "80px", width: "80px", marginLeft: "25px", marginTop: "10px" }}>
                        <Tree />
                    </div>
                    <div className="navbar-links">
                        <a onClick={() => context.changePage("/work")} className="navbar-link">Work</a>
                        <a onClick={() => context.changePage("/contact")} className="navbar-link">
                            Contact
                        </a>
                    </div>
                </nav>
            </MediaQuery>
        </div>
    );
};

export default props => (
    <Location>
        {locationProps => <NavBar {...locationProps} {...props} />}
    </Location>
);
