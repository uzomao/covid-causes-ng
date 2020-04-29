import React from 'react'

import { graphql } from 'gatsby'

export const query = graphql`
    query($slug: String) {
        contentfulCause (slug: {
            eq: $slug
        }) {
            name
            officialStatus
            neighbourhood
            city
            aidProvided
            summaryOfActivities {
                summaryOfActivities
            }
            instagram
            website
            email
            phone
        }
    }
`

const CauseTemplate = (props) => {

    const { 
        name,
        officialStatus,
        neighbourhood,
        city,
        aidProvided,
        summaryOfActivities,
        instagram, website, email, phone
     } = props.data.contentfulCause
    
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <div class="container is-fluid">
                    <h1 class="title">
                        {name}
                    </h1>
                    <h2 class="subtitle is-uppercase">
                        {officialStatus}
                    </h2>
                    </div>
                </div>
            </section>

            <main>
                <section class="container is-fluid columns">
                    <div class="column is-half">
                        <p><b>Neighbourhood: </b> {neighbourhood}</p>
                        <p><b>City: </b> {city}</p>
                        <p><b>Aid Provided: </b> {aidProvided}</p>
                    </div>

                    <div class="column is-half has-text-right">
                        <h4 class="title is-4">Bank Details</h4>
                        <p>-</p>
                    </div>
                </section>

                <section class="container is-fluid">
                    <div>
                        <h4 class="title is-4">Summary of Activities</h4>
                        <p>{summaryOfActivities.summaryOfActivities}</p>
                    </div>
                </section>

                <section class="container is-fluid">
                    <div>
                        <h4 class="title is-4">Gallery</h4>
                        <p></p>
                    </div>
                </section>

                <section class="container is-fluid">
                    <div>
                        <h4 class="title is-4">Contact Info</h4>

                        <p><b>Website: </b> {website}</p>
                        <p><b>Email: </b> {email}</p>
                        <p><b>Phone: </b> {phone}</p>
                        <p><b>Instagram: </b> {instagram}</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CauseTemplate
