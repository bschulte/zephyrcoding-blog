import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'
import logo128 from './logo-128.png'
import logo196 from './logo-196.png'

// PrismJS highlighting theme
require('prismjs/themes/prism-okaidia.css')

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={'/'}
          >
            <img
              src={logo196}
              alt={`Brian Schulte`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: -15,
                width: rhythm(2.5),
                height: rhythm(2.5)
              }}
            />
            Zephyr Coding
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1)
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={'/'}
          >
            Zephyr Coding
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
