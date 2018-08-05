import React, { Fragment, PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { H2, Header } from "@atoms"
import { Glimpse, Intro, Section } from "@molecules"
import articles from "@articles"

const Content = styled.article`
  font-size: 20px;
  margin-top: ${p => p.theme.spacing.mult(10)}px;
  width: ${p => p.theme.spacing.containerWidth}px;

  .anchor {
    position: relative;
    top: ${p => p.theme.spacing.mult(-12)}px;
  }

  h2 {
    font-size: 32px;
    font-weight: normal;
    line-height: 50px;
    margin: ${p => p.theme.spacing.mult(6)}px 0 ${p => p.theme.spacing.mult(4)}px;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: normal;
    line-height: 40px;
    margin: ${p => p.theme.spacing.mult(4)}px 0 ${p => p.theme.spacing.mult(3)}px;
  }

  p {
    line-height: 30px;
    margin: ${p => p.theme.spacing.mult(2)}px 0;
  }

  ul,
  ol {
    margin: ${p => p.theme.spacing.mult(3)}px 0;
    padding-left: ${p => p.theme.spacing.mult(2.5)}px;

    li {
      margin: ${p => p.theme.spacing.mult(1.5)}px 0;
    }
  }

  img,
  .video-wrapper {
    display: block;
    margin: ${p => p.theme.spacing.mult(3)}px 0;
    max-width: ${p => p.theme.spacing.containerWidth}px;
  }

  .video-wrapper {
    padding-bottom: 61.5%;
    position: relative;

    iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .retro {
    background: ${p => p.theme.colours.lightGrey};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: ${p => p.theme.spacing.mult(10)}px 0;
    position: relative;
    margin-top: ${p => p.theme.spacing.mult(10)}px;

    &::before,
    &::after {
      background: ${p => p.theme.colours.lightGrey};
      bottom: 0;
      content: "";
      position: absolute;
      top: 0;
      width: 100vw;
    }

    &::before {
      right: 100%;
    }

    &::after {
      left: 100%;
    }

    section {
      width: ${p => p.theme.spacing.containerWidth}px;

      h2 {
        margin: 0 0 ${p => p.theme.spacing.mult(5)}px;
      }

      p {
        margin-bottom: 0;
      }
    }
  }
`

class Article extends PureComponent {
  componentDidMount() {
    this.resetScroll()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) this.resetScroll()
  }

  resetScroll = () => window.scrollTo(0, 0)

  getNextArticle(article) {
    const index = articles.indexOf(article)
    const nextIndex = index + 1 === articles.length ? 0 : index + 1

    return articles[nextIndex]
  }

  render() {
    const { match } = this.props
    const article = articles.find(article => article.slug === match.params.slug)
    const nextArticle = this.getNextArticle(article)

    return (
      <Fragment>
        <Header title={article.title} nextLink={nextArticle.slug} />

        <Intro
          title={article.title}
          introduction={article.description}
          nextSlug={nextArticle.slug}
          image={article.glimpse}
          meta={[article.role, article.team, article.duration]}
        />

        <Content dangerouslySetInnerHTML={{ __html: article.content() }} />

        <Section>
          <H2>Next project</H2>
          <Glimpse
            title={nextArticle.title}
            introduction={nextArticle.description}
            tag={nextArticle.tag}
            slug={nextArticle.slug}
            image={nextArticle.glimpse}
          />
        </Section>
      </Fragment>
    )
  }
}

Article.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default Article
