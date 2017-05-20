import React from 'react'
import ReactDOM from 'react-dom'
import smoothScroll from 'smoothscroll-polyfill'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Layout from './Layout'

AOS.init()
smoothScroll.polyfill()

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)
