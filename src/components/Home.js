import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { Glimpse } from './atoms'

import articles from '../../articles'

class Home extends PureComponent {
  render () {
    return (

      <section className='page work'>

        {/* INFOS */}

        <aside>

          <h3>Hi, I'm a designer.</h3>
          <p>
            Driven by problem solving, I build products which empower people and grow businesses.
          </p>
          <p>
            I use interaction and interface design to breathe life into ideas, user experience methods to drive decisions and code to deliver pixel perfect interfaces.
          </p>
          <p>
            I love to create processes which bring teams together around one goal: make an awesome product!
          </p>

          <Link className='button' to='/about' title='About'>Learn more about me</Link>

        </aside>

        {/* CONTENT */}

        <main>

          { articles.map(article =>
            <Glimpse
              title={article.title}
              introduction={article.description}
              tag={article.tag}
              slug={article.slug}
              image={article.glimpse}
              key={article.slug}
            />
          )}

        </main>

      </section>

    )
  }
}

export default Home
