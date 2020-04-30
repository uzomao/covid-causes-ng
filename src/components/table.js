import React from 'react'

import { graphql, useStaticQuery, navigate } from 'gatsby'

import '../styles/table.css'

const Table = () => {

    const query = useStaticQuery(graphql`
        query {
            allContentfulCause {
                nodes {
                    name
                    neighbourhood
                    city
                    aidProvided
                    slug
                }
            }
        }
    `)

    const tableBody = query.allContentfulCause.nodes.map(({ name, neighbourhood, city, aidProvided, slug}, index) => 
            <tr 
                key={index}
                onClick={() => navigate(`/cause/${slug}`)} 
                style={{cursor: 'pointer'}}
            >
                <td>{name}</td>
                <td>{neighbourhood}</td>
                <td>{city}</td>
                <td className="has-text-right">{aidProvided}</td>
            </tr>
    )

    return (
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
    )
}

export default Table
