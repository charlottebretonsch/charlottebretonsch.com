/* This is the home page */

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { Glimpse } from './atoms'

import articles from '../../articles'

class Home extends PureComponent {
  render () {
    return (

      <main>

        {/* ABOUT */}

        <section>

          <h1>Hi, I'm a designer.</h1>

          <h4>
            I love crafting products, services and systems for people, with people.
          </h4>

          <h4>
            My expertise lies in information architecture, interface design, user research and design strategy – Although code and visual design come in handy when working on side projects, prototyping or presenting things ;)
          </h4>

          <h4>
            When I’m not designing, I play the piano, pretend to be a ballet dancer, read love stories, travel, volunteer for cool events and watch Netflix.
          </h4>

          {/*
          <Link className='button' to='/about' title='About'>My resume</Link>
          */}

        </section>

        {/* PROJECTS */}

        <section>

          <h2>Here are some of my projects.</h2>

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

        </section>

      </main>

    )
  }
}

export default Home
