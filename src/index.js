import React from 'react'
import ReactDOM from 'react-dom'
import smoothScroll from 'smoothscroll-polyfill'

import Layout from './Layout'

smoothScroll.polyfill()

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)
