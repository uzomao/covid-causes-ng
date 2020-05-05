import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
    return (
        <Layout>
            <SEO title="About" />

            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container is-fluid columns">
                        <div className="column">
                            <h1 className="is-size-1">
                                About Covid Causes
                            </h1>
                            <Link to="/" className="button is-info">
                                <h4 className="is-size-4">Home</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section content is-size-5">

                <div className="container" style={{width: '75%'}}>

                    <p>
                        Covid Causes was founded as a means to provide a central location that lists all the credible private citizens, 
                        organizations and charities that are actively helping out the most needy in Nigeria during the Covid19 pandemic
                        - and are in need of donations and support. 
                    </p>
                    
                    <p>
                        We are not a watchdog - however we are pre-screening before listing, in order to not list questionable 
                        and possibly fraudulent entities. We do not take any money on behalf of anyone listed - we simply provide 
                        basic information and links so that you can decide for yourself who you feel comfortable donating to. 
                    </p>
                    
                    <p>
                        We advise you to get in contact directly with these organizations and private citizens ahead of making 
                        a donation.
                    </p>

                    <p>
                        Covid Causes has been created by G.rizo a.k.a. Ihu Anyanwu (DJ/musician/culture worker) 
                        and <a href="https://uzomaorji.com" target="blank_" rel="noopener noreferrer">Uzoma Orji</a> (artist/technologist).
                    </p>

                    <p>
                        Covid Causes is supported by Naija Tech Creatives
                    </p>

                </div>
            </section>
        </Layout>
    )
}

export default About
