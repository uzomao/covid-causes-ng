import React from 'react'

import { graphql, Link } from 'gatsby'

import Img from "gatsby-image"

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
            bankDetails
            instagram
            website
            email
            phone
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
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
        bankDetails,
        instagram, website, email, phone,
        images
     } = props.data.contentfulCause
    
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container is-fluid columns">
                        <div className="column">
                            <h1 className="title">
                                {name}
                            </h1>
                            <h2 className="subtitle is-uppercase">
                                {officialStatus}
                            </h2>
                        </div>

                        <div className="column has-text-right has-text-left-mobile">
                            <Link to="/" className="button is-info">
                                <h4 className="is-size-4">Back to all</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <main className="container is-fluid">
                <section className="section">
                    <div className="columns">
                        <div className="column is-half is-size-5">
                            <p><b>Neighbourhood: </b> {neighbourhood}</p>
                            <p><b>City: </b> {city}</p>
                            <p><b>Aid Provided: </b> {aidProvided}</p>
                        </div>

                        <div className="column is-half has-text-right has-text-left-mobile">
                            <h4 className="title is-4">Bank Details</h4>
                            <p>{bankDetails}</p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div>
                        <h4 className="title is-4">Summary of Activities</h4>
                        <p>{summaryOfActivities.summaryOfActivities}</p>
                    </div>
                </section>

                <section className="section">
                    <div>
                        <h4 className="title is-4">Gallery</h4>
                        <div className="columns">
                            {
                                images ?
                                    images.map((image, index) => 
                                        <Img 
                                            key={index}
                                            className="column is-one-third"
                                            fluid={image.fluid} 
                                            alt={`photo of ${name} in action`} 
                                        />
                                    )
                                    :
                                    <p className="column is-one-third">No images provided</p>
                            }
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div>
                        <h4 className="title is-4">Contact Info</h4>

                        <p><b>Website: </b> 
                            <a href={website} target='_blank' rel="noopener noreferrer">
                                {website}
                            </a>
                        </p>
                        <p><b>Email: </b> 
                            <a href={`mailto:${email}`} target='_blank' rel="noopener noreferrer">
                                {email}
                            </a>
                        </p>
                        <p><b>Phone: </b> {phone}</p>
                        <p><b>Instagram: </b> 
                            <a href={`https://instagram.com/${instagram}`} target='_blank' rel="noopener noreferrer">
                                {instagram}
                            </a>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CauseTemplate
