import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Table from '../components/table'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="section">
      <button class="button is-info is-medium">
        Filter
      </button>
    </div>

    <main class="section">
      <Table />
    </main>
    
  </Layout>
)

export default IndexPage
