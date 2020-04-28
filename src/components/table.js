import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

const Table = () => {

    const query = useStaticQuery(graphql`
        query {
            allContentfulCause {
                nodes {
                    name
                    neighbourhood
                    city
                    aidProvided
                }
            }
        }
    `)

    const tableBody = query.allContentfulCause.nodes.map(({ name, neighbourhood, city, aidProvided}) => 
        <tr>
            <td>{name}</td>
            <td>{neighbourhood}</td>
            <td>{city}</td>
            <td>{aidProvided}</td>
        </tr>
    )

    return (
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Neighbourhood</th>
                    <th>City</th>
                    <th>Aid Provided</th>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    )
}

export default Table
