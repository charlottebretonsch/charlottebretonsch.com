import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import articles from '../../articles'

class Article extends PureComponent {
  render () {
    const { match } = this.props
    const article = articles.find(article => article.slug === match.params.slug)

    return <article>
      { article
        ? <div dangerouslySetInnerHTML={{ __html: article.content() }} />
        : <p>Article not found</p>
      }
    </article>
  }
}

Article.propTypes = {
  match: PropTypes.object.isRequired
}

export default Article
