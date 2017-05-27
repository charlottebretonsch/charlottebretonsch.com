import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'

const history = createHistory()

history.listen((location) => {
  const page = location.pathname + location.search

  ReactGA.set({ page })
  ReactGA.pageview(page)
})

export default history
