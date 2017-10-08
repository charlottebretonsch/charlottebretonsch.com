import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Experience extends PureComponent {
  render () {
    const {
      children,
      title,
      subtitle,
      more
    } = this.props

    return (
      <div className='react-experience'>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        { children }
        { more.map((text, index) =>
          <p className='weak' key={index}>{ text }</p>
        )}
      </div>

    )
  }
}

Experience.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  more: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Experience
