import React, { Fragment, PureComponent } from "react"

import { H1, H2, Header, Nav } from "@atoms"
import { Glimpse, Section } from "@molecules"

import articles from "@articles"

class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />

        <Section>
          <H1>Hello, I’m a Designer.</H1>

          <p>I love crafting products, services and systems for people, with people.</p>

          <p>
            My expertise lies in information architecture, interface design, user research and
            design strategy – Although code and visual design come in handy when working on side
            projects, prototyping or presenting things. ;)
          </p>

          <p>
            When I’m not designing, I play the piano, pretend to be a ballet dancer, read love
            stories, travel, volunteer for cool events and watch Netflix.
          </p>

          <Nav>
            <a href="resume.pdf">My resume</a>
            <a href="https://www.linkedin.com/in/charlotte-breton-schreiner">My LinkedIn</a>
            <a href="https://github.com/charlottebretonsch">My Github</a>
          </Nav>
        </Section>

        <Section>
          <H2>Here are some of my projects.</H2>

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
        </Section>

        <Section>
          <H2>Want to have a chat?</H2>

          <p>
            I’m always happy to meet new people and talk about new opportunities so don’t hesitate
            to get in touch with me.
          </p>

          <Nav>
            <a href="mailto:charlottebretonsch@gmail.com">Send me an email</a>
          </Nav>
        </Section>
      </Fragment>
    )
  }
}

export default Home
