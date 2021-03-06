import React, { Fragment, PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { H2, Header } from "@atoms"
import { Glimpse, Intro, Section } from "@molecules"
import articles from "@articles"

const Content = styled.article`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  font-size: 20px;
  margin-top: ${p => p.theme.spacing.mult(10)}px;
  width: 100%;

  .anchor {
    position: relative;
    top: ${p => p.theme.spacing.mult(-12)}px;
  }

  section {
    ${p => p.theme.css.containerWidth};
  }

  h2 {
    font-size: 32px;
    font-weight: normal;
    line-height: 50px;
    margin: ${p => p.theme.spacing.mult(7)}px 0 ${p => p.theme.spacing.mult(4)}px;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: normal;
    line-height: 40px;
    margin: ${p => p.theme.spacing.mult(5)}px 0 ${p => p.theme.spacing.mult(3)}px;
  }

  p {
    line-height: 30px;
    margin: ${p => p.theme.spacing.mult(2)}px 0;
  }

  section > a {
    margin: 0 0 ${p => p.theme.spacing.mult(3)}px 0;
    display: inline-block;
  }

  ul,
  ol {
    margin: ${p => p.theme.spacing.mult(3)}px 0;
    padding-left: ${p => p.theme.spacing.mult(2.5)}px;

    li {
      margin: ${p => p.theme.spacing.mult(3)}px 0;
    }
  }

  img,
  .video-wrapper {
    display: block;
    margin: ${p => p.theme.spacing.mult(4)}px 0;
    width: 100%;
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
    ${p => p.theme.css.horizontalRow};
    margin: ${p => p.theme.spacing.mult(10)}px 0 0;
    padding: ${p => p.theme.spacing.mult(10)}px 0;

    div {
      ${p => p.theme.css.containerWidth};

      h2 {
        margin: 0 0 ${p => p.theme.spacing.mult(4)}px;
      }

      & > ul,
      & > ol {
        display: flex;
        flex-flow: row nowrap;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          display: flex;
          flex-flow: column nowrap;
          flex-grow: 1;
          font-size: 16px;
          margin: 0;
          width: 20%;

          h3 {
            margin: 0 0 ${p => p.theme.spacing.mult(2)}px;
          }

          p {
            font-size: inherit;
            line-height: ${p => p.theme.spacing.mult(3)}px;
            margin: 0 0 ${p => p.theme.spacing.base}px;
          }

          ul,
          ol {
            align-items: stretch;
            display: flex;
            flex-flow: column nowrap;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
              display: block;
              width: 100%;
            }
          }
        }
      }
    }

    /* background: ${p => p.theme.colours.lightGrey};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: ${p => p.theme.spacing.mult(10)}px 0;
    position: relative;
    margin-top: ${p => p.theme.spacing.mult(10)}px; */

    @media (max-width: ${p => p.theme.responsive.limits.medium}px) {
      margin: ${p => p.theme.spacing.mult(7)}px 0 0 0;
      padding: ${p => p.theme.spacing.mult(7)}px 0;

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
      p, a {
        font-size: 16px;
        line-height: 24px;
      }
    }
    @media (max-width: ${p => p.theme.responsive.limits.small}px) {
      ol {
        flex-flow: row wrap !important;
      }
      li {
        width: 100% !important;
      }
      h2 {
        margin-bottom: ${p => p.theme.spacing.mult(2)}px !important;
      }
      h3 {
        margin-top: ${p => p.theme.spacing.mult(2)}px !important;
      }
    }
  }

  @media (max-width: ${p => p.theme.responsive.limits.medium}px) {
    margin: ${p => p.theme.spacing.mult(7)}px 0 0 0;

    h2 {
      font-size: 24px;
      line-height: 36px;
      margin: ${p => p.theme.spacing.mult(6)}px 0 ${p => p.theme.spacing.mult(4)}px 0;
    }
    h3 {
      font-size: 20px;
      line-height: 30px;
      margin: ${p => p.theme.spacing.mult(4)}px 0 ${p => p.theme.spacing.mult(3)}px 0;
    }
    li, p, a {
      font-size: 16px;
      line-height: 24px;
    }
    ul {
      margin: ${p => p.theme.spacing.mult(2)}px 0;
    }
    img,
    .video-wrapper {
      margin: ${p => p.theme.spacing.mult(3)}px 0;
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
          meta={article.more}
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
