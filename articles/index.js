import config from '../site.yml'

const articles = config.articles.map(article => ({
  ...article,
  content: require(`./${article.contentFile}`)
}))

export default articles
