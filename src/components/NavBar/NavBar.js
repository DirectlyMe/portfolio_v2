import "./styles.scss";

import classNames from "classnames";
import React, { useContext } from "react";
import MediaQuery from "react-responsive";
import Image from "../image";

import Context from "../../Context";

const NavBar = ({ currentPage }) => {
    const context = useContext(Context);

    return (
        <div>
            <MediaQuery query="(min-width: 500px)">
                <nav className="navbar">
                    <div className="navigationButtons">
                        <li className="navbar-li">
                            <a
                                onClick={() => context.changePage("/")}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                className={classNames(["nav-button"], {
                                    ["highlight-route-about"]:
                                        currentPage === "/", // eslint-disable-line
                                })}
                            >
                                Home
                            </a>
                        </li>
                        <li className="navbar-li">
                            <a
                                onClick={() => context.changePage("/work")}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                className={classNames(["nav-button"], {
                                    ["highlight-route-work"]:
                                        currentPage === "/work", // eslint-disable-line
                                })}
                            >
                                Work
                            </a>
                        </li>
                    </div>
                </nav>
            </MediaQuery>
            <MediaQuery query="(max-width: 499px)">
                <nav className="navbar">
                    <div style={{ height: "80px", width: "80px" }}>
                        <Image />
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

export default NavBar;
