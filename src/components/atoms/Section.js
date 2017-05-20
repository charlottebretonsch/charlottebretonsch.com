import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Glimpse from './Glimpse'

class Section extends PureComponent {
  render () {
    const { children, ...props } = this.props

    return <section {...props}>
      { children }
    </section>
  }
}

class IntroSection extends PureComponent {
  onStart () {
    document.querySelector('#start .anchor').scrollIntoView({ behavior: 'smooth' })
  }

  render () {
    const { article, nextArticleURL } = this.props

    return <Section className='article intro'>
      <aside>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <p>
          <strong>Role:</strong><br />
          {article.role}
        </p>
        <p>
          <strong>Team:</strong><br />
          {article.team}
        </p>
        <p>
          <strong>Duration:</strong><br />
          {article.duration}
        </p>

        { article.more.map((text, index) =>
          <p className='weak' key={index}>{ text }</p>
        )}

        <div className='actions'>
          <a href='#start' title='About' className='button start' onClick={this.onStart}>Start</a>
          <Link className='button next' to={nextArticleURL}>Next article</Link>
        </div>
      </aside>

      <main>
        <img className='glimpse' src={article.glimpse} />
      </main>
    </Section>
  }
}

IntroSection.propTypes = {
  article: PropTypes.object.isRequired,
  nextArticleURL: PropTypes.string.isRequired
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

Section.Intro = IntroSection
Section.NextArticle = NextArticleSection

export default Section
