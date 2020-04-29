import React from 'react'

import { graphql, Link } from 'gatsby'

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
                    <div class="container is-fluid columns">
                        <div class="column">
                            <h1 class="title">
                                {name}
                            </h1>
                            <h2 class="subtitle is-uppercase">
                                {officialStatus}
                            </h2>
                        </div>

                        <div class="column has-text-right has-text-left-mobile">
                            <Link to="/" class="button is-info">
                                <h4 class="is-size-4">Back to all</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <main class="container is-fluid">
                <section class="section">
                    <div class="columns">
                        <div class="column is-half is-size-5">
                            <p><b>Neighbourhood: </b> {neighbourhood}</p>
                            <p><b>City: </b> {city}</p>
                            <p><b>Aid Provided: </b> {aidProvided}</p>
                        </div>

                        <div class="column is-half has-text-right has-text-left-mobile">
                            <h4 class="title is-4">Bank Details</h4>
                            <p>-</p>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div>
                        <h4 class="title is-4">Summary of Activities</h4>
                        <p>{summaryOfActivities.summaryOfActivities}</p>
                    </div>
                </section>

                <section class="section">
                    <div>
                        <h4 class="title is-4">Gallery</h4>
                        <p></p>
                    </div>
                </section>

                <section class="section">
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
