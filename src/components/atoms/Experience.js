import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Experience extends PureComponent {
  render () {
    const { title, subtitle, description, more } = this.props

    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ description }</p>
        { more.map(text =>
          <p className="weak">{ text }</p>
        )}
      </div>

    )
  }
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  more: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Experience
