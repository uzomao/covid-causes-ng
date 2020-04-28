import React from 'react'

import { graphql } from 'gatsby'

export const query = graphql`
    query($slug: String) {
        contentfulCause (slug: {
            eq: $slug
        }) {
            name
        }
    }
`

const CauseTemplate = (props) => {

    const { name } = props.data.contentfulCause
    
    return (
        <h1>
            {name}
        </h1>
    )
}

export default CauseTemplate
