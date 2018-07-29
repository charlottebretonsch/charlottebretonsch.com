import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { H1, Nav } from "@atoms"

const Container = styled.header`
  background: ${p => p.theme.colours.lightGrey};
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: calc(100vh - ${p => p.theme.spacing.mult(27)}px);
  margin-left: calc(${p => p.theme.spacing.containerWidth / 2}px - 50vw);
  padding: ${p => p.theme.spacing.mult(10)}px;
  width: 100vw;

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
    }

    ul {
      flex-grow: 1;
      font-size: 16px;
      line-height: 24px;
      list-style: none;
      margin: ${p => p.theme.spacing.mult(2)}px 0 0;
      padding: 0;
    }
  }

  img {
    margin-left: ${p => p.theme.spacing.mult(12)}px;
    object-fit: cover;
    flex-grow: 7;
    width: 10%;
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
    )
  }
}

export default Intro
