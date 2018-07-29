import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

const line = colour => css`
  background: ${colour};
  content: "";
  height: ${p => p.theme.spacing.mult(0.5)}px;
  position: absolute;
  top: 100%;
  left: 0;
`

const Wrapper = styled.header`
  background: ${p =>
    p.becomesGrey && p.shrunk ? p.theme.colours.lightGrey : p.theme.colours.light};
  box-sizing: border-box;
  height: ${p => p.theme.spacing.mult(p.shrunk ? 9 : 13)}px;
  margin-bottom: ${p => p.theme.spacing.mult(0.5)}px;
  margin-left: calc(${p => p.theme.spacing.containerWidth / 2}px - 50vw);
  padding: 0 calc(50vw - ${p => p.theme.spacing.containerWidth / 2}px);
  position: sticky;
  top: 0;
  transition: 0.2s;
  width: 100vw;
  z-index: 10;

  &::before {
    ${line(p => p.theme.colours.grey)};
    width: 100%;
  }

  &::after {
    ${line(p => p.theme.colours.dark)};
    transition: width 0.1s;
    width: ${p => p.progress}%;
  }
`

const isHidden = p => (p.main && p.shrunk && p.isArticle) || (p.article && !p.shrunk)

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  opacity: ${p => (isHidden(p) ? 0 : 1)};
  position: absolute;
  top: 50%;
  transform: translate(0, calc(-50% - ${p => (isHidden(p) ? 70 : 0)}px));
  transition: 0.8s;
  width: ${p => p.theme.spacing.containerWidth}px;

  a {
    ${p =>
      p.main &&
      css`
        border: none;
      `};
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
  }
`

const Title = styled.p`
  margin: 0;
`

class Header extends PureComponent {
  static propTypes = {
    nextLink: PropTypes.string,
    title: PropTypes.string,
    threshold: PropTypes.number.isRequired
  }

  static defaultProps = {
    threshold: 200
  }

  state = {
    progress: 0,
    shrunk: false
  }

  componentDidMount() {
    this.onScroll()
    window.onscroll = this.onScroll
  }

  onScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = (winScroll / height) * 100
    this.setState({
      progress,
      shrunk: winScroll >= this.props.threshold
    })
  }

  render() {
    const { nextLink, title } = this.props
    const { shrunk } = this.state
    const isArticle = !(!nextLink || !title)

    return (
      <Wrapper {...this.state} becomesGrey={isArticle}>
        <Container main shrunk={shrunk} isArticle={isArticle}>
          <Link to="/">Charlotte Breton Schreiner</Link>
        </Container>
        {isArticle && (
          <Container article shrunk={shrunk} isArticle={isArticle}>
            <Title>{title}</Title>
            <Link to={`/${nextLink}`}>Next project</Link>
          </Container>
        )}
      </Wrapper>
    )
  }
}

export default Header
