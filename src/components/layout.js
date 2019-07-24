/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import Navbar from "./NavBar/NavBar";
import Context from "../Context";

import "./layout.css";

const Layout = ({ children, about, work, contact }) => {
    const [context, setContext] = useState({
        imageNodes: [],
        updateContext,
        changePage,
    });

    const [currentPage, setCurrentPage] = useState("/");

    function updateContext(newContext) {
        try {
            setContext({ ...newContext });
        } catch (err) {
            console.log(err);
        }
    }

    function changePage(page) {
        if (page === "/") {
            window.scrollTo({
                left: 0,
                top: about.current.offsetTop,
                behavior: "smooth",
            });
            setCurrentPage("/");
        } else if (page === "/work") {
            window.scrollTo({
                left: 0,
                top: work.current.offsetTop,
                behavior: "smooth",
            });
            setCurrentPage("/work");
        } else if (page === "/contact") {
            window.scrollTo({
                left: 0,
                top: contact.current.offsetTop,
                behavior: "smooth",
            });
        }
    }

    return (
        <Context.Provider value={context}>
            <Navbar currentPage={currentPage} />
            <main>{children}</main>
        </Context.Provider>
    );
};

export default Layout;
