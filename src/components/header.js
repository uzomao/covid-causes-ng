// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <section className="hero">
    <div>
      <div className="section">
        <h1 className="title">
          {siteTitle}
        </h1>
        <h2 className="subtitle">
          {siteDescription}
        </h2>
      </div>
    </div>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``
}

export default Header
