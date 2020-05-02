/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
    <section className="section">
      <Header siteTitle={data.site.siteMetadata.title} 
        siteDescription={data.site.siteMetadata.description} 
      />
      <div>
        <main>{children}</main>
      </div>
    </section>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Covid Causes Nigeria &copy; {new Date().getFullYear()} 
        </p>
      </div>
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
