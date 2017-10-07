import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Layout from './Layout'

AOS.init()
ReactGA.initialize('UA-53041838-2')

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)
