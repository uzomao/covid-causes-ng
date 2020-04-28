import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <section class="hero">
    <div>
      <div class="section">
        <h1 class="title">
          {siteTitle}
        </h1>
        <h2 class="subtitle">
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
