import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Table from '../components/table'

const IndexPage = () => {

  const [showFilter, setShowFilter] = useState(false)
  
  return (
    <Layout>
      <SEO title="Home" />

      <div className="section">
        <button className="button is-info is-medium" onClick={() => setShowFilter(!showFilter)}>
          Filter
        </button>
      </div>

      <main className="section">
        <Table showFilter={showFilter} />
      </main>
      
    </Layout>
  )
}

export default IndexPage
