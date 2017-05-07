import React, { PureComponent } from 'react'

import { Glimpse } from './atoms'

class Home extends PureComponent {
  render () {
    return(

      <section className="page work">

        {/* INFOS */}

        <aside>

          <h3>Hi, I'm a designer.</h3>
          <p>Driven by problem solving, I build products which empower people and grow businesses.</p>
          <p>I use ergonomy and visual design to breathe life into ideas, user experience methods to drive decisions and code to deliver pixel perfect interfaces.</p>
          <p>I love to create processes which bring teams together around one goal: make an awesome product!</p><a className="button" href="about.html" title="About">Learn more about me</a>

        </aside>

        {/* CONTENT */}

        <main>

          {/* Zenitth */}
          <Glimpse
            title="Connecting fanboys with Zenitth"
            introduction="Learn how I used research, information architecture, interface, and prototyping in order to build my final year product."
            tag="In-depth case study"
            slug="Zenitth"
            image="zenitth"
          />

        </main>

      </section>

    )
  }
}

export default Home
