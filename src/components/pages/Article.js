import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { H2 } from "@atoms"
import { Intro, Glimpse, Section } from "@molecules"
import articles from "@articles"

const Content = styled.article`
  margin-top: ${p => p.theme.spacing.mult(10)}px 0;

  h2 {
    font-size: 32px;
    font-weight: normal;
    line-height: 50px;
  }

  h3 {
    font-size: 24px;
    font-weight: normal;
    line-height: 40px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
  }

  img,
  .video-wrapper {
    margin: 0 -${p => p.theme.spacing.mult(5)}px;
    width: ${p => p.theme.spacing.containerWidth + p.theme.spacing.mult(10)}px;
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
    margin-left: calc(${p => p.theme.spacing.containerWidth / 2}px - 50vw);
    padding: ${p => p.theme.spacing.mult(10)}px 0;
    margin-top: ${p => p.theme.spacing.mult(10)}px;
    width: 100vw;

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
      <main>
        <Intro
          title={article.title}
          introduction={article.description}
          nextSlug={nextArticle.slug}
          image={article.glimpse}
          meta={["Speaker", "60+ attendees", "1 hour"]}
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
      </main>
    )
  }
}

Article.propTypes = {
  match: PropTypes.object.isRequired
}

export default Article
