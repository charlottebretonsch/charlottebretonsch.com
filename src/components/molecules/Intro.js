import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { H1, HorizontalRow, Nav } from "@atoms"

const Container = styled.header`
  box-sizing: content-box;
  display: flex;
  flex-flow: row nowrap;
  min-height: ${p => p.theme.spacing.mult(60)}px;
  max-width: ${p => p.theme.spacing.mult(140)}px;
  padding: ${p => p.theme.spacing.mult(10)}px;

  aside {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 3;
    width: 10%;

    ${H1} {
      margin-bottom: ${p => p.theme.spacing.mult(1.5)}px;
    }

    p {
      font-size: 20px;
      line-height: 30px;
      margin: 0;
    }

    ul {
      flex-grow: 1;
      font-size: 16px;
      line-height: 24px;
      list-style: none;
      margin: ${p => p.theme.spacing.mult(2)}px 0 0;
      padding: 0;

      li {
        margin-bottom: ${p => p.theme.spacing.base}px;
      }
    }
  }

  img {
    margin-left: ${p => p.theme.spacing.mult(7)}px;
    object-fit: cover;
    flex-grow: 7;
    height: 100%;
    width: 10%;
  }

  @media (max-width: ${p => p.theme.responsive.limits.medium}px) {
    padding: ${p => p.theme.spacing.mult(7)}px;

    aside {
      h1 {
        font-size: 32px;
        line-height: 40px;
        margin: 0 0 ${p => p.theme.spacing.mult(4)}px 0;
      }
      h2 {
        font-size: 24px;
        line-height: 36px;
        margin: 0 0 ${p => p.theme.spacing.mult(4)}px 0;
      }
      h3 {
        font-size: 20px;
        line-height: 30px;
        margin: 0 0 ${p => p.theme.spacing.mult(4)}px 0;
      }
      p,
      a {
        font-size: 16px;
        line-height: 24px;
      }
      p {
        margin: ${p => p.theme.spacing.mult(1)}px 0 ${p => p.theme.spacing.mult(2)}px 0;
      }

      ul {
        margin: 0;
      }
    }
  }

  @media (max-width: ${p => p.theme.responsive.limits.small}px) {
    flex-flow: column nowrap;
    padding: ${p => p.theme.spacing.mult(7)}px ${p => p.theme.spacing.mult(3)}px;

    nav {
      margin: ${p => p.theme.spacing.mult(1)}px 0;
    }

    aside {
      width: 100%;
    }

    img {
      height: auto;
      margin: ${p => p.theme.spacing.mult(3)}px 0 0;
      width: 100%;
    }
  }
`

class Intro extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    nextSlug: PropTypes.string.isRequired,
    meta: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string.isRequired,
  }

  onStart = event => {
    event.preventDefault()

    document.querySelector(".anchor").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }

  render() {
    const { title, introduction, nextSlug, meta, image } = this.props

    return (
      <HorizontalRow>
        <Container>
          <aside>
            <H1>{title}</H1>
            <p>{introduction}</p>

            {meta && <ul>{meta.map((x, i) => <li key={i}>{x}</li>)}</ul>}

            <Nav>
              <a href="#anchor" onClick={this.onStart}>
                Start
              </a>
              <Link to={`/${nextSlug}`}>Next project</Link>
            </Nav>
          </aside>

          <img src={image} />
        </Container>
      </HorizontalRow>
    )
  }
}

export default Intro
