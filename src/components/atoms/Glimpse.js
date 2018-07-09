/* This is a glimpse of an article */

import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

class Glimpse extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  render() {
    const { title, introduction, slug, image } = this.props

    return (
      <article>
        <img src={image} />

        <div>
          <h3>{title}</h3>
          <p>{introduction}</p>

          <nav>
            <Link to={`/${slug}`}>Read the story</Link>
          </nav>
        </div>
      </article>
    )
  }
}

export default Glimpse
