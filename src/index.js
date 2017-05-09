import React from 'react'
import ReactDOM from 'react-dom'
import smoothScroll from 'smoothscroll-polyfill'

smoothScroll.polyfill()

import Layout from './Layout'

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)
