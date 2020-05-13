import React from 'react'

import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"

const SocialSharing = () => {

    const icon = {
        fontSize: '1.5rem',
        verticalAlign: 'middle',
        margin: '.5rem',
        link: {
            color: 'inherit'
        }
    }

    return (
        <div>
            <ul>
                <p className="content has-text-centered is-size-6">
                    Share this site:
                    <li className="icon" style={icon}>
                        <a 
                            href="https://twitter.com/intent/tweet?text=Check%20out%20Covid%20Causes,%20a%20directory%20of%20amazing%20Nigerians%20providing%20food,%20cash%20and%20other%20relief%20during%20the%20Covid-19%20crisis%3A%20https%3A//covidcauses.ng"
                            style={icon.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="icon" style={icon}>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//covidcauses.ng" style={icon.link}
                        target="_blank"
                        rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className="icon" style={icon}>
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//covidcauses.ng&title=An%20amazing%20directory%20of%20Nigerian%20Covid-19%20relief%20providers&summary=Covid%20Causes%20is%20a%20website%20that%20lists%20private%20individuals%20and%20organisations%20providing%20food,%20cash%20and%20other%20relief%20materials%20to%20Nigerians%20during%20the%20Covid-19%20crisis.&source=https%3A//covidcauses.ng" 
                        style={icon.link}
                        target="_blank"
                        rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </li>
                </p>
            </ul>
        </div>
    )
}

export default SocialSharing
