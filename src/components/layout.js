/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "./NavBar/NavBar";

import "./layout.css"

const Layout = ({ children, currentPage }) => {
  return (
    <>
      <Navbar currentPage={currentPage} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
