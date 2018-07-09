/* This is the home page */

import React, { PureComponent } from "react"
import { Link } from "react-router-dom"

import { Glimpse } from "@atoms"

import articles from "@articles"

class Home extends PureComponent {
  render() {
    return (
      <main>
        {/* ABOUT */}

        <section className="hero">
          <h1>Hi, I'm a designer.</h1>

          <p>I love crafting products, services and systems for people, with people.</p>

          <p>
            My expertise lies in information architecture, interface design, user research and
            design strategy – Although code and visual design come in handy when working on side
            projects, prototyping or <a href="#">presenting things</a>. ;)
          </p>

          <p>
            When I’m not designing, I play the piano, pretend to be a ballet dancer, read love
            stories, travel, volunteer for cool events and watch Netflix.
          </p>

          <nav>
            <a>My resume</a>
            <a>My LinkedIn</a>
            <a>My Github</a>
          </nav>
        </section>

        {/* PROJECTS */}

        <section>
          <h2>Here are some of my projects.</h2>

          {articles.map(article => (
            <Glimpse
              title={article.title}
              introduction={article.description}
              tag={article.tag}
              slug={article.slug}
              image={article.glimpse}
              key={article.slug}
            />
          ))}
        </section>

        <section>
          <h2>Want to have a chat?</h2>

          <p>
            I’m always happy to meet new people and talk about new opportunities so don’t hesitate
            to get in touch with me.
          </p>

          <nav>
            <a href="#">Send me an email</a>
          </nav>
        </section>
      </main>
    )
  }
}

export default Home
