import config from './site.yml'

const articles = config.articles.map(article => ({
  ...article,
  content: require(`./${article.contentFile}`),
  glimpse: require(`../assets/content/${article.slug}/glimpse.png`)
}))

export default articles
