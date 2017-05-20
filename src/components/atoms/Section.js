import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Glimpse from './Glimpse'

class Section extends PureComponent {
  render () {
    const { children, ...props } = this.props

    return <section {...props}>
      { children }
    </section>
  }
}

class NextArticleSection extends PureComponent {
  render () {
    const { article } = this.props

    return <Section className='article content next-article'>
      <main>
        <h2>Next article</h2>
        <Glimpse
          title={article.title}
          introduction={article.description}
          tag={article.tag}
          slug={article.slug}
          image={article.glimpse}
        />
      </main>
    </Section>
  }
}

NextArticleSection.propTypes = {
  article: PropTypes.object.isRequired
}

Section.NextArticle = NextArticleSection

export default Section
