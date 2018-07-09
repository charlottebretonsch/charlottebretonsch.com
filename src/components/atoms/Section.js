import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Glimpse from "./Glimpse"

class Section extends PureComponent {
  render() {
    const { children, ...props } = this.props

    return <section {...props}>{children}</section>
  }
}

/* This is the introduction of the article */

class IntroSection extends PureComponent {
  onStart(event) {
    event.preventDefault()

    document.querySelector("#start .anchor").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

  render() {
    const { article, nextArticleURL } = this.props

    return (
      <Section className="article intro">
        <aside>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <h5>
            Role<br />
            {article.role}
          </h5>
          <h5>
            Team<br />
            {article.team}
          </h5>
          <h5>
            Duration<br />
            {article.duration}
          </h5>

          {article.more.map((text, index) => <h5 key={index}>{text}</h5>)}

          <div className="actions">
            <a href="#start" title="About" className="button start" onClick={this.onStart}>
              Start
            </a>
            <Link className="button next" to={nextArticleURL}>
              Next article
            </Link>
          </div>
        </aside>

        <div class="article-image">
          <img className="glimpse" src={article.glimpse} />
        </div>
      </Section>
    )
  }
}

IntroSection.propTypes = {
  article: PropTypes.object.isRequired,
  nextArticleURL: PropTypes.string.isRequired
}

/* This is the next article at the end of an article */

class NextArticleSection extends PureComponent {
  render() {
    const { article } = this.props

    return (
      <div className="article content next-article">
        <section>
          <h2>Next article</h2>
          <Glimpse
            title={article.title}
            introduction={article.description}
            tag={article.tag}
            slug={article.slug}
            image={article.glimpse}
          />
        </section>
      </div>
    )
  }
}

NextArticleSection.propTypes = {
  article: PropTypes.object.isRequired
}

Section.Intro = IntroSection
Section.NextArticle = NextArticleSection

export default Section
