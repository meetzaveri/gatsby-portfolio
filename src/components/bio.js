import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <h2> A little bit about me ...</h2>
            <div>
              <p>
                Stranded onto this earth on 16th of August,1996. At present,
                frontend engineer at{' '}
                <a href="https://gridle.io/" target="_blank">
                  Gridle
                </a>
                . Holds a <span>Bachelor of Engineering</span> degree in
                computer science & engineering.
              </p>

              <p>
                {' '}
                Passionate about JavaScript, React Ecosystem, and Web perf.{' '}
                Always up to experiment new things, taking up new challenges and
                designing architecture. Hopes to make some impact in this
                developer community.
              </p>

              <p>
                {' '}
                Want to reach out? Well {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                  connect with me on twitter
                </a>
              </p>
            </div>

            <h2>... living in beautiful land of Gujarat,India</h2>
            <div className="d-flex-align">
              <div className="dib">
                <Image
                  fixed={data.elephant.childImageSharp.fixed}
                  alt={author}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: '100%',
                  }}
                />
              </div>
              <div className="dib f-15">
                <i className="dib fas fa-map-pin" /> Ahmedabad
              </div>
            </div>

            <div>
              <h2> who loves to ...</h2>
              <ul>
                <li>Build things and OSS lover</li>
                <li>Engage in competetive programming</li>
                <li>Write articles about computer science</li>
                <li>Watch football(Premier League) on weekends</li>
                <li>Explore unknown roads</li>
                <li>Refactor old code</li>
              </ul>

              <h2>interests/likes ...</h2>
              <ul>
                <li>Marvel universe, short documentaries</li>
                <li>South Indian Cuisine, Palak Paneer</li>
                <li>
                  Synthwave/Retro/Electronic{' '}
                  <i className="dib fas fa-music "> </i>{' '}
                </li>
                <li>Undefined/null/404</li>
              </ul>
              <div className="db f-15">
                <a
                  className="custom-anchor "
                  href="https://in.linkedin.com/in/meet-zaveri-0839a511a"
                  target="_blank"
                >
                  <i class="dib mr1 fab fa-linkedin" />
                </a>
                <a
                  className="custom-anchor "
                  href="https://github.com/meetzaveri"
                  target="_blank"
                >
                  <i className="dib mr1 fab fa-github" />
                </a>
                <a
                  className="custom-anchor "
                  href="https://medium.com/@meetzaveri"
                  target="_blank"
                >
                  <i className="dib mr1 fab fa-medium" />
                </a>
                <a
                  className="custom-anchor "
                  href="https://stackoverflow.com/users/7121483/meet-zaveri"
                  target="_blank"
                >
                  <i className="dib mr1 fab fa-stack-overflow" />
                </a>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    elephant: file(absolutePath: { regex: "/asset-old-city.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
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
