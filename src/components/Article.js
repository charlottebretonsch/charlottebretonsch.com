import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Section } from './atoms'
import articles from '../../articles'

class Article extends PureComponent {
  getNextArticle (article) {
    const index = articles.indexOf(article)
    const nextIndex = index + 1 === articles.length
      ? 0
      : index + 1

    return articles[nextIndex]
  }

  render () {
    const { match } = this.props
    const article = articles.find(article => article.slug === match.params.slug)

    const nextArticle = this.getNextArticle(article)
    const nextArticleURL = `/work/${nextArticle.slug}`

    const content = article.content()

    return (
      <div className='react-container'>

          {/* -> ARTICLE MENU */}
  {/*
          <nav
            className='article'
            data-aos='slide-down'
            data-aos-anchor='.article.intro'
            data-aos-anchor-placement='top-top'
          >
            <h4>{ article.title }</h4>
            <Link to={`/work/${nextArticle.slug}`} className='button next'>Next article</Link>
          </nav>
  */}
          {/* -> ARTICLE INTRO */}

          <Section.Intro
            article={article}
            nextArticleURL={nextArticleURL}
          />

          {/* -> ARTICLE CONTENT */}
        <main>
          { article
            ? <div className='react-article' dangerouslySetInnerHTML={{ __html: content }} />
            : <p>Article not found</p>
          }

          {/* -> ARTICLE NEXT */}

          <Section.NextArticle article={nextArticle} />

          {/* -> ARTICLE END */}

        </main>
      </div>
    )
  }
}

Article.propTypes = {
  match: PropTypes.object.isRequired
}

export default Article
