import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <section className="hero">
      <div className="section columns">
        <div className="column is-two-thirds">
          <h1 className="title">
            {siteTitle} <span role='img' aria-label='nigerian-flag' className="is-size-2">🇳🇬</span>
          </h1>
          <h2 className="subtitle">
            {siteDescription}
          </h2>
        </div>

        <div className="column has-text-right has-text-left-mobile">
          <Link to="/about" className="is-size-4" style={{
            textDecoration: 'underline'
          }}>About Covid Causes</Link>
          <p style={{marginTop: '5px'}}>
            <a href="https://covidcausesng.typeform.com/to/KvwGm4"
              className="button is-link is-size-6"
              style={{boxShadow: '3px 3px #dbdbdb'}}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add your cause
            </a>
          </p>
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
