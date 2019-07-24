import "./index_styles.scss";

import React, { useEffect, useRef, useState } from "react";

import AboutScreen from "../components/about";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Work from "../components/work";
import Contact from "../components/contact";
import MediaQuery from "react-responsive";

const IndexPage = () => {
    const about = useRef(null);
    const work = useRef(null);
    const contact = useRef(null);

    return (
            <Layout about={about} work={work} contact={contact}>
                <SEO title="Home" />
                <AboutScreen />
                <MediaQuery query="(max-width: 499px)">
                    <div ref={about}>
                        <AboutScreen />
                    </div>
                    <div ref={work}>
                        <Work />
                    </div>
                    <div ref={contact}>
                        <Contact />
                    </div>
                </MediaQuery>
            </Layout>

    );
};

export default IndexPage;
