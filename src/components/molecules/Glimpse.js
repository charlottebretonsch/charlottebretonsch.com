/* This is a glimpse of an article */

import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { H4, Nav } from "@atoms"

const Container = styled.article`
  background: ${p => p.theme.colours.lightGrey};
  height: ${p => p.theme.spacing.mult(38)}px;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 -${p => p.theme.spacing.mult(5)}px;

  img {
    object-fit: cover;
    width: ${p => p.theme.spacing.mult(48)}px;
  }

  div {
    display: flex;
    flex-flow: column nowrap;
    padding: ${p => p.theme.spacing.mult(5)}px;

    p {
      flex-grow: 1;
      font-size: 20px;
      line-height: 30px;
      margin-top: ${p => p.theme.spacing.mult(2)}px;
    }

    ${Nav} {
      margin: 0;
    }
  }

  & + & {
    margin-top: ${p => p.theme.spacing.mult(4)}px;
  }

  @media (max-width: ${p => p.theme.responsive.limits.medium}px) {
    margin: 0 -${p => p.theme.spacing.mult(4)}px;

    h4 {
      font-size: 20px;
      line-height: 30px;
      margin: 0 0 ${p => p.theme.spacing.mult(1)}px 0;
    }
    p {
      font-size: 16px !important;
      line-height: 24px !important;
      margin: ${p => p.theme.spacing.mult(1)}px 0 ${p => p.theme.spacing.mult(2)}px 0 !important;
    }
    a {
      font-size: 16px !important;
      line-height: 24px;
    }
  }
  @media (max-width: ${p => p.theme.responsive.limits.small}px) {
    flex-flow: column nowrap;
    height: auto;
    margin: 0 -${p => p.theme.spacing.mult(1)}px;

    img {
      height: auto;
      width: 100%;
    }

    div {
      padding: ${p => p.theme.spacing.mult(4)}px;

      p {
        margin-bottom: ${p => p.theme.spacing.mult(2)}px;
        margin-top: ${p => p.theme.spacing.mult(1.5)}px;
      }
    }
  }
`

class Glimpse extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }

  render() {
    const { title, introduction, slug, image } = this.props

    return (
      <Container>
        <img src={image} />

        <div>
          <H4>{title}</H4>
          <p>{introduction}</p>

          <Nav>
            <Link to={`/${slug}`}>Read the story</Link>
          </Nav>
        </div>
      </Container>
    )
  }
}

export default Glimpse
