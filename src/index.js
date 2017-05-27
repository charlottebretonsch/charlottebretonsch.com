import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import smoothScroll from 'smoothscroll-polyfill'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Layout from './Layout'

AOS.init()
smoothScroll.polyfill()
ReactGA.initialize('UA-53041838-2')

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)
