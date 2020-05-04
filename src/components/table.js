import React from 'react'

import { graphql, useStaticQuery, navigate } from 'gatsby'

import '../styles/table.css'

import Filter from '../components/filter'

const Table = ({ showFilter, setShowFilter, filterValue, setFilterValue }) => {

    const query = useStaticQuery(graphql`
        query {
            allContentfulCause {
                nodes {
                    name
                    neighbourhood
                    city
                    aidProvided
                    slug
                    officialStatus
                }
            }
        }
    `)
    
    const filters = {
        neighbourhood: [],
        city: [],
        aidProvided: [],
        officialStatus: [],
        digitalEvidence: [true, false]
    }

    function addFilters() {

        const argumentKeys = ['neighbourhood', 'city', 'aidProvided', 'officialStatus', 'digitalEvidence']

        argumentKeys.forEach((key, index) => {
            const argument = arguments[index] //arguments[0] = neighbourhood e.g Karimo
            //split string 'Karimo, Jabi, Gishiri' into an array with three properties
            argument && argument.split(', ').forEach((argument) => {
                !filters[key].includes(argument) && filters[key].push(argument)
            })
        })
    }

    const entries = filterValue ? 
        query.allContentfulCause.nodes.filter(entry => {return entry['city'] && entry['city'].includes(filterValue)} )
        :
        query.allContentfulCause.nodes

    const tableBody = entries.map(({ name, neighbourhood, city, aidProvided, officialStatus, 
        digitalEvidence, slug}, index) => {

            addFilters(neighbourhood, city, aidProvided, officialStatus, digitalEvidence)

            return <tr 
                        key={index}
                        onClick={() => navigate(`/cause/${slug}`)} 
                        style={{cursor: 'pointer'}}
                    >
                        <td>{name}</td>
                        <td>{neighbourhood}</td>
                        <td>{city}</td>
                        <td className="has-text-right">{aidProvided}</td>
                    </tr>
    })

    return (
        <>
        <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Neighbourhood</th>
                    <th>City</th>
                    <th className="has-text-right">Aid Provided</th>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>

        { showFilter && <Filter filters={filters} setFilterValue={setFilterValue} setShowFilter={setShowFilter} /> }
        </>
    )
}

export default Table
