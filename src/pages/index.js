import React, { useEffect, useState, useRef } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index_styles.scss";
import Work from "../components/work";
import AboutScreen from "../components/about";
import Context from "../Context";

const IndexPage = () => {
    const [context, setContext] = useState({
        imageNodes: [],
        updateContext,
    });

    let ticking = 0;
    let previousPos = 0;

    const about = useRef(null);
    const work = useRef(null);

    useEffect(() => {
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
        } else if (previousPos > scrollPos) {
            window.scrollTo({
                left: 0,
                top: about.current.offsetTop,
                behavior: "auto",
            });
        }
    }

    return (
        <Context.Provider value={context}>
            <Layout>
                <SEO title="Home" />
                <div ref={about}>
                    <AboutScreen />
                </div>
                <div ref={work}>
                    <Work />
                </div>
            </Layout>
        </Context.Provider>
    );
};

export default IndexPage;
