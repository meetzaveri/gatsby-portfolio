import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio(props) {
  return (
    <StaticQuery
      query={CustomHeaderQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className={props.styleClass}>
            <Image
              fluid={data.avatar.childImageSharp.fluid}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%',
                minWidth: '200px',
              }}
            />
          </div>
        )
      }}
    />
  )
}

const CustomHeaderQuery = graphql`
  query CustomHeaderQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
