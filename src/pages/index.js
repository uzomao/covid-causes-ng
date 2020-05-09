import React, { useState } from "react"

import Layout from "../components/layout"

import Table from '../components/table'

import Logo from '../components/logo'

const IndexPage = () => {

  const [ showFilter, setShowFilter ] = useState(false)
  const [ filterValue, setFilterValue ] = useState(null)

  return (
    <Layout showHeader={true} pageTitle="Home">

      <div className="section">
        <button className="button is-info is-medium" style={{boxShadow: '3px 3px #dbdbdb'}} onClick={() => { 
            setShowFilter(!showFilter)
            setFilterValue(null)
            /**
             * Reset filter value to null everytime the button is clicked so that the filter options are not compromised
             * by the previously set filter options. Doing this bc in table.js, the filter options are derived from addFilters
             * which is in turn called by the value of entries which is itself dependent on the filterValue
             */
        }}>
          Filter
        </button>
      </div>

      <main className="section">
        <Table showFilter={showFilter} setShowFilter={setShowFilter} filterValue={filterValue} setFilterValue={setFilterValue} />
      </main>

      <Logo />
      
    </Layout>
  )
}

export default IndexPage
