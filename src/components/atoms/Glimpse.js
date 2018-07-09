/* This is a glimpse of an article */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Glimpse extends PureComponent {
  render () {
    const { title, introduction, tag, slug, image } = this.props

    return (

      <article>
        <div className='info'>
          <div className='info-details'>
            <h3>{ title }</h3>
            <p>{ introduction }</p>
            { tag &&
              <p><strong>{ tag }</strong></p>
            }
          </div>
          <nav>
            <Link className='button next' to={`/work/${slug}`}>Read the article</Link>
          </nav>
        </div>
        <img className='glimpse' src={image} />
      </article>

    )
  }
}

Glimpse.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  tag: PropTypes.string,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Glimpse
