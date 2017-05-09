import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Glimpse } from './atoms'
import articles from '../../articles'

class Article extends PureComponent {
  getNextArticle (article) {
    const index = articles.indexOf(article)
    const nextIndex = index + 1 === articles.length
      ? 0
      : index + 1

    return articles[nextIndex]
  }

  onClickArticle (event) {
    const href = event.target.getAttribute('href')

    if (href === '#start') {
      document.querySelector('#start').scrollIntoView({ behavior: 'smooth' })
    }
  }

  render () {
    const { match } = this.props
    const article = articles.find(article => article.slug === match.params.slug)

    const nextArticle = this.getNextArticle(article)

    const content = article.content({
      nextArticleURL: `/work/${nextArticle.slug}`
    })

    return (
      <div className='react-container'>

        {/* -> ARTICLE MENU */}

        <nav className='article'>

          <h4>{ article.title }</h4>
          <Link to={`/work/${nextArticle.slug}`} className='button next'>Next article</Link>

        </nav>

        {/* <- ARTICLE MENU */}
        {/* -> ARTICLE CONTENT */}

        { article
          ? <div className='react-article' dangerouslySetInnerHTML={{ __html: content }} onClick={this.onClickArticle} />
          : <p>Article not found</p>
        }

        {/* <- ARTICLE CONTENT */}
        {/* -> ARTICLE NEXT */}

        <section className='article content next-article'>
          <main>

            <h2>Next article</h2>

            <Glimpse
              title={nextArticle.title}
              introduction={nextArticle.description}
              tag={nextArticle.tag}
              slug={nextArticle.slug}
              image={nextArticle.glimpse}
            />

          </main>
        </section>

        {/* <- ARTICLE NEXT */}

      </div>
    )
  }
}

Article.propTypes = {
  match: PropTypes.object.isRequired
}

export default Article
