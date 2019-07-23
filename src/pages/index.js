import "./index_styles.scss";

import React, { useEffect, useRef, useState } from "react";

import AboutScreen from "../components/about";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Work from "../components/work";
import Context from "../Context";
import Contact from "../components/contact";
import MediaQuery from "react-responsive";

const IndexPage = () => {
    const [context, setContext] = useState({
        imageNodes: [],
        updateContext,
        changePage,
    });

    const [currentPage, setCurrentPage] = useState("/");

    let ticking = 0;
    let previousPos = 0;

    const about = useRef(null);
    const work = useRef(null);
    const contact = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 500) {
            window.addEventListener("scroll", function(e) {
                let lastKnownScrollPosition = window.scrollY;
    
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        scrollNext(lastKnownScrollPosition);
                        previousPos = lastKnownScrollPosition;
                        ticking = false;
                    });
    
                    ticking = true;
                }
            });
        }
    }, []);

    function updateContext(newContext) {
        try {
            setContext({ ...newContext });
        } catch (err) {
            console.log(err);
        }
    }

    function scrollNext(scrollPos) {
        if (previousPos < scrollPos) {
            window.scrollTo({
                left: 0,
                top: work.current.offsetTop,
                behavior: "auto",
            });
            setCurrentPage("/work");
        } else if (previousPos > scrollPos) {
            window.scrollTo({
                left: 0,
                top: about.current.offsetTop,
                behavior: "auto",
            });
            setCurrentPage("/");
        }
    }

    function changePage(page) {
        if (page === "/") {
            window.scrollTo({
                left: 0,
                top: about.current.offsetTop,
                behavior: "auto",
            });
            setCurrentPage("/");
        } else if (page === "/work") {
            window.scrollTo({
                left: 0,
                top: work.current.offsetTop,
                behavior: "auto",
            });
            setCurrentPage("/work");
        } else if (page === "/contact") {
            window.scrollTo({
                left: 0,
                top: contact.current.offsetTop,
                behavior: "auto",
            });
        }
    }

    return (
        <Context.Provider value={context}>
            <Layout currentPage={currentPage}>
                <SEO title="Home" />
                <div ref={about}>
                    <AboutScreen />
                </div>
                <div ref={work}>
                    <Work />
                </div>
                <MediaQuery query="(max-width: 499px)">
                    <div ref={contact}>
                        <Contact />
                    </div>
                </MediaQuery>
            </Layout>
        </Context.Provider>
    );
};

export default IndexPage;
