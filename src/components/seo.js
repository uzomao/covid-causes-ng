import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname }) => (
    <StaticQuery query={query} render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            siteUrl,
            titleTemplate,
            defaultImage,
            keywords,
            author
          }
        }
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          url: `${siteUrl}${pathname || '/'}`,
          image: `${siteUrl}${image || defaultImage}`,
          author: author,
          keywords: keywords
        }
        return (
            <>
            <Helmet title={seo.title} titleTemplate={titleTemplate}>

                <meta name="description" content={seo.description} />

                <meta name="keywords" content={seo.keywords} />

                <meta property="og:type" content="website" />

                {seo.url && 
                  <meta property="og:url" content={seo.url} />
                }

                {seo.title && 
                  <meta property="og:title" content={seo.title} />
                }

                {seo.description && 
                  <meta property="og:description" content={seo.description} />
                }

                {seo.image && 
                  <meta property="og:image" content={seo.image} />
                }

                <meta name="twitter:card" content="summary_large_image" />
                
                {author && 
                  <meta name="twitter:creator" content={author} />
                }

                {seo.title && 
                  <meta name="twitter:title" content={seo.title} />
                }

                {seo.description && 
                  <meta name="twitter:description" content={seo.description} />
                }

                {seo.image && 
                  <meta name="twitter:image" content={seo.image} />
                }
            </Helmet>
            </>
        )
      }} 
    />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        titleTemplate
        defaultImage: image
        keywords
        author
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}